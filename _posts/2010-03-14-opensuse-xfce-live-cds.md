---
layout: post
title: openSUSE Xfce Live CDs
---

Yesterday Andrea aka anubisg1 [announced the Live CDs for LXDE](http://lizards.opensuse.org/2010/03/13/opensuse-lxde-live-cds/), which he built in Build Service with the help of Dmitry Serpokryl. It was a very easy task for me to replace LXDE packages with Xfce ones in kiwi definition, so I can present you **the Xfce Live CDs**!

![xfce_cd](/assets/xfce_cd.png)

I've created an entry in our [Derivates](http://en.opensuse.org/Derivatives#Unofficial_updated_Xfce_live_CDs) page and you can download the images from [this location](http://download.opensuse.org/repositories/X11:/xfce/images/iso/). The default user is **linux** with no password, user **root** uses the same empty password.

I've tested the 32-bit image in VirtualBox and hit some issues (see below), the 64-bit image is untested at the moment. There's where I would like you to ask for testing both images. Some points first:

* currently the Qt YaST is used (I had some issues with GTK one)
* after the login a warning message is shown (about putting "linux" into `/etc/hosts`)
* you can install the system to hard drive using the Live Installer icon on the desktop
    * unfortunately this blocks us from enabling autologin (installed system expects "linux" user which is present only on Live CD and login ends in loop, the bug in YaST is being worked on)
    * also some message dialogs about locked storage subsystem are shown during the installation steps

If you hit a new issue, please report it to me. Also if you know how to fix any existing ones, please don't hesitate as well! Thank you!
