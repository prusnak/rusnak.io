#!/bin/sh
user=$(cat /dev/urandom | tr -cd '0-9a-z' | head -c 26)
echo $user
curl -e 'http://unogs.com/countrydetail/' "http://unogs.com/cgi-bin/nf.cgi?u=$user&t=lc&cl=" | jq -c '.ITEMS[] | del(.[0,2,3,4,5,7,8,9,10,11,12])' | sed 's:\"\([0-9]\+\)\":\1:' | sed 's:$:,:' > netflix-data.json
