---
layout: post
title: zypper - dependency graph
---

Yesterday, we needed with [darix](http://nordisch.org/) to obtain a dependency graph of the package you are about to install. I knew that something similar was planned in zypper, so I went to [Jano Kupec](http://jniq.blogspot.com/) to check the status of it.

Unfortunately, I learned that this feature is not implemented yet. I think it should not be very hard to enhance the zypper package list with some eye-candy, but I haven't looked into it yet. I would love to have these outputs similar to Gentoo ones (colors and simple ASCII art dependency trees). Btw, zypper already has [color support](http://jniq.blogspot.com/2009/06/colors-in-zypper.html), so if you want to start hacking, there is [source code in gitorious](http://gitorious.org/opensuse/zypper).

![zypper-flightgear](/assets/zypper-flightgear.png)

![emerge-flightgear](/assets/emerge-flightgear.png)

Jano also showed me a neat trick how to obtain the results we wanted anyway. If you are in similar situation, just follow these steps (they are of course not suitable for everyday use, but still better than nothing):

1. install package `libzypp-testsuite-tools`
2. run `zypper install --debug-solver pkg`
3. cd into `/var/log/zypper.solverTestCase`
4. open `solver-test.xml` in your favorite editor
5. add `<graphic/>` tag just above the `</trial>` closing tag
6. run `/usr/lib/zypp/testsuite/bin/deptestomatic.multi solver-test.xml` (as normal user, you won't get any graph when running as root)
7. you can pan the graph, rotate it with the right click or even save it to disk!

The resulting image can be seen here:

![solvertree-flightgear](/assets/solvertree-flightgear.png)
