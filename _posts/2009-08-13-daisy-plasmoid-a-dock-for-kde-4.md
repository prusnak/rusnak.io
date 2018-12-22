---
layout: post
title: Daisy Plasmoid - A dock for KDE 4
---

From time to time I use Mac OS X and I really like the application management with its [dock](http://en.wikipedia.org/wiki/Dock_(Mac_OS_X)). I came across several different implementations for KDE 4, but they were usually too immature and not very pretty. I was very surprised when I finally found a decent implementation called [Daisy](http://daisyplasma.freehostia.com/).

I immediately dropped the default KDE taskbar and started to use Daisy in conjunction with desktop effects "Box Switch" and "Present Windows" a.k.a Exposé. You can look at my setup here (only bottom 64 pixels are shown, the rest is usually occupied with maximized application):

![daisytray](/assets/daisytray.jpg)

Daisy detects running instances of applications by Window Class, so it doesn't try to start another instance, it rather activates the already running one. The experience is very similar to the Mac OS X one, but still, there are three problems:

* I still have to use the panel for Battery Monitor and Device Notifier widgets
    * Daisy could act as a host for other widgets and show them as icons
* Applications started manually (e.g. with KRunner) do not appear in the dock
    * Daisy could act as a taskbar and show icons of all running windows
* Applications like instant messengers or IRC clients use tray for notifications
    * Daisy could act as a tray and replace the launcher icon with the one added to tray by application after its start (so it will flash in the dock)

Once these three points are met, Daisy will become a complete counterpart of Mac OS X dock. I've already written these suggestions to Lechio (upstream developer), but I'm not sure if this is the direction he wants to go and whether it is possible to do without any extra hacks at the KDE/Plasma side. (I'm sure that Lechio will accept any help :-) ) Anyway, have a look at the [project page](http://daisyplasma.freehostia.com/), [KDE-Look page](http://www.kde-look.org/content/show.php/Daisy?content=102077) or try the plasmoid from the Build Service. The package is called **plasmoid-daisy** and is present in [KDE:KDE4:Community](http://download.opensuse.org/repositories/KDE:/KDE4:/Community/) project.
