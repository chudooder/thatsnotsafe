import json
import re
import sys
from bs4 import BeautifulSoup
from collections import OrderedDict

def parseList(str):
    try:
        if 'x' in str:
            elems = str.split('x')
            return [parseInt(elems[0].strip()) for i in range(int(elems[1]))]
        elif '\u00D7' in str:
            elems = str.split('\u00D7')
            return [parseInt(elems[0].strip()) for i in range(int(elems[1]))]
        elif '*' in str:
            elems = str.split('*')
            return [parseInt(elems[0].strip()) for i in range(int(elems[1]))]
        elif ',' in str:
            elems = str.split(',')
            return [parseInt(e) for e in elems]
        elif ' ' in str:
            elems = str.split(' ')
            return [parseInt(e) for e in elems]
        elif '(' in str:
            str = str.replace('(', ' (').replace(')', ') ')
            elems = str.split(' ')
            return [parseInt(e) for e in elems]
        else:
            return [int(str)]
    except ValueError:
        print("Could not parse number: %s" % (str,))
        print("Please type it in as comma seperated values:")
        s = raw_input('>')
        return map(int, s.split(','))

def parseInt(str):
    try:
        if str.startswith('(') and str.endswith(')'):
            return -int(str[1:-1])
        else:
            return int(str)
    except ValueError:
        print("Could not parse number: %s" % (str,))
        print("Please type it in as comma seperated values:")
        s = raw_input('>')
        return int(s)

def parseLevel(level, hits):
    levels = parseList(level)
    if len(levels) == 1 and hits > 1:
        return [levels[0] for i in range(hits)]
    return levels

def parseProrate(prorate):
    if prorate == '-':
        return (None, 1.0)
    if prorate.startswith('Initial'):
        return ('initial', float(prorate[-3:-1]) / 100)
    if prorate.startswith('Forced'):
        return ('forced', float(prorate[-3:-1]) / 100)

def parseActive(active):
    if 'Until Landing' in active:
        return [60];
    else:
        return parseList(active)


def parseRecovery(recovery):
    if 'Until Landing' in recovery:
        return (60, 0)
    elif 'Landing' in recovery or 'landing' in recovery:
        match = re.match(r'(\d+)\s*\+\s*(\d+)', recovery)
        return (parseInt(match.group(1)), parseInt(match.group(2)))
    else:
        return (parseInt(recovery), 0)

def getMoveData(table):
    rows = []
    for tr in table.find_all('tr'):
        elems = []
        for th in tr.find_all('th'):
            elems.append(th.get_text().strip())
        for td in tr.find_all('td'):
            elems.append(td.get_text().strip())

        if len(elems) == 15:
            rows.append(elems)
            print(elems)

    data = OrderedDict()

    for i, row in enumerate(rows):
        if i == 0:
            continue
        name = row[0].replace(' ', '')
        damage = parseList(row[1])
        riscHit, riscGain = map(int, row[3].split('/'))
        prorateType, prorateAmount = parseProrate(row[4])
        recovery, landing_recovery = parseRecovery(row[11])

        move = OrderedDict()
        move["key"] = name
        move["hits"] = len(damage)
        move["damage"] = damage
        move["tension"] = parseList(row[2])
        move["risc_hit"] = riscHit
        move["risc_gain"] = riscGain
        move["prorate_type"] = prorateType
        move["prorate_amount"] = prorateAmount
        move["level"] = parseLevel(row[5], len(damage))
        move["guard"] = row[6]
        move["cancel"] = row[7]
        move["roman"] = row[8]
        move["startup"] = parseInt(row[9])
        move["active"] = parseActive(row[10])
        move["total_active"] = sum([abs(v) for v in move["active"]])
        move["recovery"] = recovery
        if landing_recovery > 0:
            move["recovery_after_landing"] = landing_recovery

        data[name] = move

    return data

def addGatlings(table, data):
    rows = []
    for tr in table.find_all('tr'):
        elems = []
        for th in tr.find_all('th'):
            elems.append(th.get_text().strip())
        for td in tr.find_all('td'):
            elems.append(td.get_text().strip())

        rows.append(elems)

    for row in rows[1:]:
        move = row[0]
        gatlings = []
        for str in row[1:-1]:
            options = [s.strip() for s in re.split(r'[, ]', str.replace('[+]', '')) if s.strip() != '-']
            options = [s for s in options if s != ""]
            gatlings.extend(options)
        data[move]["gatling"] = gatlings


if __name__ == '__main__':
    charname = sys.argv[1]
    soup = BeautifulSoup(open('data/html/'+charname+'.html').read(), 'html.parser')

    tables = soup.find_all('table')
    print(len(tables))

    # find the basic attacks table
    data = getMoveData(tables[0])
    addGatlings(tables[5], data)
    addGatlings(tables[6], data)
    # universal = getMoveData(tables[1])
    # special = getMoveData(tables[2])

    json.dump(data, open('data/json/'+charname+'.json', 'w'), indent=4)