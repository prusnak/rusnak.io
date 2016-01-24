---
layout: post
title: Xfce 4.6.0 released (and ready for testing!)
---

{% img /content/xfce_logo.png %}

The Xfce development team [announced](http://www.xfce.org/about/news?id=21) today the release of the long-awaited 4.6.0 version of their [Xfce Desktop Environment](http://www.xfce.org/). There is also a very nice [Visual Tour](http://www.xfce.org/about/tour) prepared by Jérôme Guelfucci and Jannis Pohlmann, which highlights some of the new and exciting Xfce features. For me, the most vivid change is the complete rewrite of the Settings Manager together with its configuration backend, but I'm sure that everybody will find his/hers own favorite :-).

It took me longer to prepare the updated packages than I expected, because of the busy BuildService, but they are finally ready in our [X11:xfce](http://en.opensuse.org/X11:xfce) BuildService project and I would like to encourage you to try them. If you encounter any problems, either upgrade issues from distribution 4.4.x series, issues with clean installation from repository or any other defects, please do not hesitate and [contact me](http://en.opensuse.org/User:Prusnak). Thank you very much and I'm looking for your comments and responses!

**Instructions (command-line):**

1. add X11:xfce repository if it is not already added: `zypper addrepo http://download.opensuse.org/repositories/X11:/xfce/openSUSE_11.1/ xfce` (replace 11.1 with your openSUSE version)
2. refresh this repository: `zypper refresh xfce`
3. get new packages
    * if you have Xfce 4.4.x installed - upgrade the packages from xfce repo: `zypper dist-upgrade --repo xfce`
    * or install the Xfce packages directly: `zypper install Terminal mousepad orage ristretto thunar thunar-volman xfce4-appfinder xfce4-desktop xfce4-mixer xfce4-notifyd xfce4-settings xfce4-taskmanager xfce4-volstatus xfconf xfwm4`

**Instructions (one-click install):**

just click on the link with your distribution:

* [openSUSE 10.3](http://download.opensuse.org/repositories/X11:/xfce/openSUSE_10.3/xfce.ymp)
* [openSUSE 11.0](http://download.opensuse.org/repositories/X11:/xfce/openSUSE_11.0/xfce.ymp)
* [openSUSE 11.1](http://download.opensuse.org/repositories/X11:/xfce/openSUSE_11.1/xfce.ymp)
