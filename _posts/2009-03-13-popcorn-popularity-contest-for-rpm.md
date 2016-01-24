---
layout: post
title: Popcorn - Popularity Contest (for RPM)
---

{% img /content/popcorn-128x128.png %}

A few days ago I came across [Feature #305877](https://features.opensuse.org/305877). What is it about? Well, Debian has the [Popularity Contest](http://popcon.debian.org/), which tracks installed packages, how often they are used and sends an anonymized report once a week to their server. This maps the usage of Debian packages and as a nice side effect Debian guys can estimate the size of their user base on various platforms and releases. This also gives information about the community structure (e.g. how many users use development tools or graphic applications). This would be a very neat thing to have in openSUSE too!

At first, the task seemed pretty straightforward - just to replace dpkg calls with corresponding calls to rpm. There was one catch, though. Because of the transactions, which RPM uses, scanning on my openSUSE 11.1 machine took 2 minutes instead of 2 seconds on Debian! That's because RPM creates one transaction for each package and constant locking and unlocking of rpmdb makes this process really slow. I rewrote the script to python, just to see how long will it take using only one long transaction and was very pleasantly surprised that it got back to 2 seconds. :) Moreover, rpmdb can tell you the exact time when the package was installed, so there was no need to check for [ctime](http://en.wikipedia.org/wiki/Stat_(Unix)) for files inside the packages like Debian does. (We still have to check for files [atime](http://en.wikipedia.org/wiki/Stat_(Unix)) to determine whether the package is used or not, though).

For the server part I was pretty sure about writing it in C to have it very fast and responsive, because I want to process incoming requests on the fly. The problem was with the storage. At the beginning I thought about using [SQLite](http://www.sqlite.org/), but after some testing I decided to use much lighter disk-based hashtables [TDB](http://tdb.samba.org/) from the [Samba](http://samba.org/) team, because they perfectly fitted my humble needs.

Has this caught your interest? You can dig through the code at [gitorious](http://gitorious.org/opensuse/popcorn) and any help is deeply welcome!. Yes, and why popcorn? Because the original is called popcon, but everybody at work just kept calling it popcorn during the discussions. Later I found another reason: popcorn is intended for RPM packages, so we definitively need an extra R in the name. :D
