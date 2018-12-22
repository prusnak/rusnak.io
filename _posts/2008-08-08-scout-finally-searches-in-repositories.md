---
layout: post
title: Scout finally searches in zypp repositories
---

I finally implemented very important feature of [scout](http://en.opensuse.org/Scout): It is now able to search for binaries in all enabled zypp repositories. SAT-solver files are used for this, so user does not have to install any external index files.

I really would like to thank [Klaus Kaempf](http://news.opensuse.org/2008/05/23/people-of-opensuse-klaus-kampf/) for his exhaustive help with python bindings for satsolver. Another great news are that Werner Fink applied command-not-found patch for bash package, so 11.1 will probably contain this feature working out of the box! Current early implementation has one problem though: it is pretty slow comparing to older use-own-sqlite-database approach (2 seconds compared to 0.2 seconds). But it indexes more repositories at once (I have 14 enabled) and I believe the code could more optimized and thus whole search faster in the (near) future.

Feel free to test the packages from BuildService (follow the instructions on [wiki](http://en.opensuse.org/Scout)) and tell me what you think of it ! :)
