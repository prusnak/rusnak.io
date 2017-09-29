#!/usr/bin/env python3
import time
from geopy.geocoders import Nominatim

geolocator = Nominatim()

old_data = {}

print('Loading old data file')

try:
    with open('data.js', 'rt') as f:
        lines = [l.strip() for l in f.readlines()]
    lines = [x[1:-2] for x in lines[1:-1]]
    lines = [x.split(', ') for x in lines]
    for x in lines:
        old_data['%s, %s' % (x[2][1:], x[3][:-1])] = (float(x[0]), float(x[1]), x[2][1:], x[3][:-1])
except:
    pass

with open('data.txt', 'rt') as f:
    lines = [l.rstrip() for l in f.readlines()]

country = None
data = []

print('Processing ...')

for i, l in enumerate(lines):
    if l == '':
        country = None
        continue
    if not l.startswith('\t'):
        country = l
        continue
    l = l.strip()
    desc = '%s, %s' % (l, country)
    if desc in old_data:
        data.append(old_data[desc])
    else:
        time.sleep(0.5)
        location = geolocator.geocode(desc)
        data.append((location.latitude, location.longitude, l, country))
    print('%d/%d %d%%' % (i, len(lines), 100 * i // len(lines)))

with open('data.js', 'wt') as f:
    f.write('window.point_data = [\n')
    for p in data:
        f.write('\t[%f, %f, "%s, %s"],\n' % (p[0], p[1], p[2], p[3]))
    f.write('];')
