---
layout: post
title: New RPM in openSUSE Factory
---

![rpmlogo](/assets/rpmlogo.png)

Michael Schroeder has finally updated the RPM package in openSUSE to the latest upstream version 4.7.1. \o/ There were LOTS of bugfixes, enhancements and internal API changes which are probably not very interesting for mere mortals, but what do they mean for packagers? Here's a list of important changes for them:

* Macro `%patch` does not behave like `%patch0` anymore. Stop mixing `Patch:` with `%patch0` and vice versa and use them consistently - i.e. either use the numbers in preamble and in `%prep` phase or don't.
* Fuzz tolerance for patches was changed from 2 to zero. All patches must apply cleanly now.
* Sub-packages can be declared as "noarch" now. Such `.spec` file is incompatible with older RPM but the resulting binary packages are compatible.
* Section `%files` now supports multiple file lists. No need to join the files into one in `%install` section.
* The new macros `%{patches}` and `%{sources}` are available. You can use them in `for` loops to iterate over all patches and sources respectively.
* `%ghost` files do not have to be present in the build root anymore. In this case you have to specify their attributes like this: `%attr(0644,root,root) %ghost ghostfile`.

Few months ago we began discussion with [Fedora](http://fedoraproject.org/) guys about how to bring our packaging habits more closer. We identified some points by comparing their [Packaging Guidelines](http://fedoraproject.org/wiki/Packaging/Guidelines) with our routines and I created a [list of differences at RPM wiki](http://rpm.org/wiki/Problems/Distributions). The main idea is to find a solution which is acceptable by both parties and to create a mechanism (usually macros) for it in RPM upstream, so both distributions can benefit from it. Some of the problems are already sorted out, but there is still a long way to go. If you are aware of such differences or even would like to propose the solution, please contact me. I'll add the items to the list and we'll discuss them at the [openSUSE Conference](http://conference.opensuse.org/schedule/) - [RPM Summit](http://en.opensuse.org/OpenSUSE_Conf_2009/RPM), where people from RPM upstream will be present as well. By looking at the "Solved" part (at the bottom) of the mentioned [wiki page](http://rpm.org/wiki/Problems/Distributions) you can see the following changes to be more compatible:

* Our `%makeinstall` macro is called `%make_install` in RPM upstream. Change it to the new form when you touch your package (also replace `make DESTDIR=${buildroot} install` with this macro).
* Build root is created in a safe way, you don't need to specify the location with `BuildRoot:`. Also it is automatically cleaned after the build if the `%clean` phase is omitted from `.spec` file (i.e. not mentioned at all, if it is there but is empty no removal is done).
* Use `%{python_sitelib}` macro for noarch Python packages and `%{python_sitearch}` for the architecture dependent ones, instead of the old `%{py_sitedir}` one. (Yes you can now create noarch Python packages!) Stop using `%{py_requires}` as well, because dependencies are added automatically now.

**Important!** Nearly all of these changes are effective from 11.2 and will not work with earlier releases in openSUSE. If you plan to use the same `.spec` file for backporting inside BuildService, you'll need to keep the old and the new stuff in corresponding `%if 0?%{?suse_version} ... %endif` blocks for a while (well, until 11.1 is EOL).

PS: I will try to keep this post updated until 11.2 is released so you might want to check it from time to time.
