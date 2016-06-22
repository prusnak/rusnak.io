#!/usr/bin/env python2
from __future__ import print_function
from geopy.geocoders import Nominatim

geolocator = Nominatim()

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
    location = geolocator.geocode('%s, %s' % (l, country))
    data.append((location.latitude, location.longitude, l, country))
    print('%d/%d %d%%' % (i, len(lines), 100 * i // len(lines)))

with open('data.js', 'wt') as f:
    f.write('window.point_data = [\n')
    for p in data:
        f.write('\t[%f, %f, "%s, %s"],\n' % (p[0], p[1], p[2], p[3]))
    f.write('];')
