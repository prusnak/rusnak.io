---
layout: post
title: "Scout: bash-completion, documentation, python indexes and Java demo"
---

A lot has happened since the public release of scout. Blogpost registered more than 400 hits, Marek Stopka created bash-completion, Thomas Schraitle wrote docbook documentation and Michal Vyskocil prepared module for python and its indexes. Thank you all!

I started a [wikipage](http://en.opensuse.org/Scout) like Thomas suggested and indexed Packman repositories for their binaries.

Michal also prepared small demonstration video about using scout in java wrapper. The wrapper runs java application and greps stderr for exceptions. When NoClassDefFoundError/ClassNotFoundException is detected, the classname is taken to scout, which resolves it to package name, installs the package with zypper and tries to run application again! I like this idea pretty much. Michal is currently working on perl indexes and we will probably index also ruby and pkgconfig files.

Watch mentioned java demonstration video here:

<iframe src="http://blip.tv/play/AcKYYAI.html?p=1" width="596" height="334" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#AcKYYAI" style="display:none"></embed>
