---
layout: post
title: Wireshark 1.2.0 with GeoIP support hits openSUSE Factory
---

A few days ago, the new stable 1.2 branch of Wireshark, the network protocol analyzer, was released to public. It contains many new features that has been added since 1.0. The most vivid are:

* Wireshark now contains a nice new start page (Picture 1)
* Display filters now do auto-completion (Picture 2)
* Wireshark can lookup in [GeoIP](http://geolite.maxmind.com/download/geoip/database/) databases and also use [OpenStreetMap](http://www.openstreetmap.org/) (Picture 3)

{% img center /content/wireshark-start.png %}

{% img center /content/wireshark-autocomplete.png %}

{% img center /content/wireshark-map.jpg %}

The release contains also a lot of bugfixes, support for the new protocols and the new capture files. You can find more info in the [release notes](http://www.wireshark.org/docs/relnotes/wireshark-1.2.0.html).

If you want to test GeoIP/OpenStreetMap integration in Wireshark, just follow these steps:

1. install the latest wireshark and GeoIP packages from Factory: `zypper install wireshark GeoIP libGeoIP1`
2. run the utility which was recently added to GeoIP package by [Ludwig Nussel](http://www.suse.de/~lnussel/): `geoip-fetch -a` This will fetch the latest GeoIP data files including the GeoIPCity, which is 44MB large, so we don't keep it in the package, but is necessary for this feature of wireshark.
3. run wireshark and enable GeoIP: **Edit -> Preferences -> Protocols -> IP -> check Enable GeoIP lookups**
4. trace some network traffic (probably the best is to access various websites in your browser)
5. pick some packet and expand Internet Protocol from dissector, you will see a line similar to this one: `[Destination GeoIP: Mountain View, CA, AS15169, 37.419201, -122.057404]`
6. go to **Statistics -> Endpoints ->** select **IPv4** tab
7. you'll see IPv4 endpoints with Countries, Cities, Providers and Latitude/Longitude
8. press Map button at the bottom of the dialog window
9. browser with OpenStreetMap and embedded Endpoints will open (see Picture 3)
10. you can also use new packet filters starting with the `ip.geoip` prefix (see Picture 2)
