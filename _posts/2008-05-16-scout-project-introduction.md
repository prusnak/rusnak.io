--- 
layout: post
title: Scout project introduction
---

You might have heard about my older project called `command-not-found`. Right now it is implemented as SQLite database which contains only `table(binary, path, package)`. (I'm going to rewrite it, so that it makes use of the new SAT solver files, but this is not the topic of this blogpost).

In the meantime, my colleague and Java packager Michal Vyskocil encountered a problem: it is very hard to find out which package installs particular Java class. Standa Brabec suggested that we could also process autoconf macros stored in m4 files. So we decided to merge these ideas together and we started the "Scout" project.

It will be a command line utility which will index various attributes of the packages and will allow the users to search in them. Each functionality will have its own module, so implementation could differ (we wanted the binary module to use SAT solver files and the others SQlite). I think that you'll get the idea from the following picture:

![scout-mockup](/assets/scout-mockup.png)

Michal and I started development by creating a [GIT repository](http://repo.or.cz/w/scout.git) (not much to see there, yet). Obviously this program will not appear in openSUSE 11.0, but we'd like to see it in 11.1 (and my plan is that command-not-found will use scout as its helper). At start, we will create 3 modules (binaries, java and autoconf), but later we'll extend the support for python/ruby programmers.

If you have any ideas, do not hesitate and contact me! :)
