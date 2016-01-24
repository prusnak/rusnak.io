---
layout: post
title: Why is pkg-config the best thing since sliced bread
---

For those of you who haven't met pkg-config yet a short introduction from its [project page](http://pkg-config.freedesktop.org/):

> "pkg-config is a helper tool used when compiling applications and libraries. It helps you insert the correct compiler options on the command line so an application can use gcc -o test test.c `pkg-config --libs --cflags glib-2.0` for instance, rather than hard-coding values on where to find glib (or other libraries). It is language-agnostic, so it can be used for defining the location of documentation tools, for instance."

![sliced-bread](/assets/sliced-bread.jpg)

More and more projects are using pkg-config already, but there is still a very high number of projects that don't. This post tries to describe why using pkg-config is a good idea.

We try to build software packages for all major Linux distributions in the [Build Service](http://build.opensuse.org/). Unfortunately there are lots differences in package names. Let's take a look at KDE 4 development library for example:

* libkde4-devel (openSUSE)
* kdelibs-devel (Fedora)
* kdelibs4-devel (Mandriva)
* kdelibs5-dev (Debian/Ubuntu)

Confusing, right? When I want to build a KDE application in the Build Service for all these distributions I have to use conditionals, which clutters the spec file. What's even worse is that I have to actually find out these names, which is not always an easy task.

RPM has a nice feature: if a file `/usr/lib/pkgconfig/foo.pc `or `/usr/share/pkgconfig/foo.pc` exists in the package, rpmbuild adds a `pkgconfig(foo)` provides symbol. But what does that mean effectively?

We don't have to require a particular package name in the list of build requirements. We just specify pkgconfig symbol instead. Once we have replaced all of these ... Crash, boom, bang - cross-distro packaging made easy! What's even more great is that it would be possible to write tools that are able to auto-generate build requirements in the spec files by simple detection of pkgconfig symbols in configure, qmake, cmake, whatever build scripts.

The most packaging headaches are caused by libraries, but often we use some utilities during the build as well. Fortunately, they tend to have the same name across distributions - e.g. `desktop-file-utils`, so it probably does not make sense to use pkgconfig everywhere.

I talked with lots of people at the openSUSE Conference and all are in favor of pkg-config usage. I would like to encourage everyone in the FOSS community to include pkgconfig files in their releases and even help others doing so! For example, the distribution package maintainers could create these files and send them to upstream. I will try to push a new rpmlint check into openSUSE, which will print warning (if the package contains a library without pkgconfig file) and a link how to add a proper one to the package.
