from bs4 import BeautifulSoup
import json

def parseList(dmg):
    try:
        ans = int(dmg)
        return [ans]
    except ValueError:
        print("Could not parse number: %s" % (dmg,))
        print("Please type it in as comma seperated values:")
        s = raw_input('>')
        return map(int, s.split(','))

def parseInt(str):
    try:
        ans = int(str)
        return ans
    except ValueError:
        print("Could not parse number: %s" % (str,))
        print("Please type it in as comma seperated values:")
        s = raw_input('>')
        return int(s)

def parseProrate(prorate):
    if prorate == '-':
        return (None, 1.0)
    if prorate.startswith('Initial'):
        return ('initial', float(prorate[-3:-1]) / 100)
    if prorate.startswith('Forced'):
        return ('forced', float(prorate[-3:-1]) / 100)


soup = BeautifulSoup(open('data/elphelt.html').read(), 'html.parser')

# find the basic attacks table
table = soup.table
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

data = {}

for i, row in enumerate(rows):
    if i == 0:
        continue
    name = row[0]
    damage = parseList(row[1])
    tension = parseInt(row[2])
    riscHit, riscGain = map(int, row[3].split('/'))
    prorateType, prorateAmount = parseProrate(row[4])
    level = parseInt(row[5])
    guard = row[6]
    cancel = row[7]
    roman = row[8]
    startup = parseInt(row[9])
    active = parseList(row[10])
    recovery = parseInt(row[11])

    move = {
        "hits": len(damage),
        "damage": damage,
        "tension": tension,
        "risc-hit": riscHit,
        "risc-gain": riscGain,
        "prorate-type": prorateType,
        "prorate-amount": prorateAmount,
        "level": level,
        "guard": guard,
        "cancel": cancel,
        "roman": roman,
        "startup": startup,
        "active": active,
        "recovery": recovery
    }

    data[name] = move

json.dump(data, open('elphelt.json', 'w'), indent=4)