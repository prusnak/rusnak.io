---
layout: post
title: OSC under Windows and Mac OS X
---

{% img /content/osc-win.png %}

Few months ago I tried to use [OSC](http://en.opensuse.org/Build_Service/CLI) - our command-line client to [BuildService](http://en.opensuse.org/Build_Service) under Windows. I failed because of the hard-coded dependency on python-rpm module, which is (of course) not present in Python package for Windows.

Today I saw [Feature #306354](https://features.opensuse.org/306354), so I decided to give it a try again. Fortunately, the recent code changes made this task a lot easier! :-) I still had to create some fixes and hacks, but they are now commited to OSC subversion and shouldn't cause problems anymore.
There are two ways how to use OSC in Windows:

* download [this archive](/content/osc.zip) (or click on the openSUSE/Windows icon above), unpack it and use `osc.exe` binary without installing the whole python distribution (this **does not need** administrator rights) (**Obsolete!** see Update #3 below)
* install python and use osc directly from its sources (this **needs** administrator rights if the python is not installed)

Most of the features like checkouts, checkins, editing metadata should work, but there are some osc features that are unusuable (yet) under Windows:

* osc build - local building of the packages
* osc vc - automated editing of changes file - you have to change the changelogs manually

If you plan to use the binary package (option 1) you don't need to read further. However, if you are interested in how I created the package or you want to use osc directly from its sources, keep reading!

Follow these steps if you want to build your own Windows build of osc:

1. install the latest [python](http://python.org/) (I used [python-2.6.2.msi](http://www.python.org/ftp/python/2.6.2/python-2.6.2.msi) installer and kept the default path `C:\Python26`)
2. install the latest [py2exe](http://www.py2exe.org/) (I used [py2exe-0.6.9.win32-py2.6.exe](http://dl.sourceforge.net/sourceforge/py2exe/py2exe-0.6.9.win32-py2.6.exe), it should find your python distribution installed in previous step)
3. install the latest [subversion](http://subversion.tigris.org/) client (I used the build from sliksvn.com: [Slik-Subversion-1.6.2-win32.msi](http://www.sliksvn.com/pub/Slik-Subversion-1.6.2-win32.msi))
4. change into your working directory and checkout the latest osc from subversion: `svn co https://forgesvn1.novell.com/svn/opensuse/trunk/buildservice/src/clientlib/python/osc`
5. change into `osc` directory
6. run py2exe: `C:\Python26\python.exe setup.py py2exe`
7. compress all files in directory `dist` into `osc.zip` and you are done! enjoy!

If you want to use osc directly from its sources, just follow the steps 1, 3, 4, 5 and run: `C:\Python26\python.exe osc-wrapper.py`

(You can save typing if you add path `C:\Python26` into your `%PATH%` variable.

That's it!

**Update #1:** I found out that something very similar could be acheived on Mac OS X using [py2app](http://svn.pythonmac.org/py2app/py2app/trunk/doc/index.html) and by calling `python setup.py py2app`. However, this is usually not needed, because Mac OS X already ships with python (2.4.2 in Tiger and 2.5.1 in Leopard if I recall correctly - these are older, but running osc with them should be just fine).

**Update #2:** Michael E. Brown and Shalonda Matthews from Dell reported two bugs in my build. They were caused by different behaviour of `mmap.mmap` function under Unix and Windows and the fact that function `os.path.sametime` isn't available under Windows at all. Both problems are fixed in SVN now and I have also rebuild the `osc.zip` archive.

**Update #3:** The zip archive is not maintained. Build Service requires quite new build of osc, therefore I recommend creating your own executable by following the steps described above.

**Update #4:** The code has moved from Subversion to [Gitorious](http://www.gitorious.org/opensuse/osc). You need to install Git and run `git clone git://gitorious.org/opensuse/osc.git` instead of points #3 and #4.
