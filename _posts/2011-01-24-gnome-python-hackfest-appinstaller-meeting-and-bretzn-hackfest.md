---
layout: post
title: GNOME Python Hackfest, AppInstaller Meeting and Bretzn Hackfest
---

What a cool and productive week! But let me start from the beginning ...

A couple of months ago we decided to start a [hackerspace](http://en.wikipedia.org/wiki/Hackerspace) in Prague called [brmlab](http://brmlab.cz/). Most of the members deal with hardware, but there are also couple of software guys like me. At the end of November we were contacted by [Tomeu](http://blog.tomeuvizoso.net/) and he asked if they can organize [GNOME Python Hackfest](http://live.gnome.org/Hackfests/Python2011) in our hackerspace. I was more than delighted about the idea, so we agreed and started to plan things. In the end we had 9 FOSS hackers working on GNOME and Python and I think they enjoyed their time in Prague. Hackerspace is a great concept, because these folks didn't have to spend extra money on renting some place and our members had opportunity to meet foreign FOSS developers and try exotic hardware like [OLPC XO-1](http://en.wikipedia.org/wiki/OLPC_XO-1).

![gnome-python-2](/assets/gnome-python-2.jpg)

Blogposts from [Tomeu](http://blog.tomeuvizoso.net/2011/01/wrap-up-python-gnome-hackfest-2011.html), [J5](http://www.j5live.com/2011/01/19/pygi-in-prague/) and [Martin](http://www.piware.de/2011/01/na-zdravi-pygi/) about the event.

-----

I had to leave the guys on Tuesday evening, because I spent the rest of the week in SUSE office in Nuernberg. The first three days were dedicated to [Cross-distribution meeting about application installer](http://distributions.freedesktop.org/wiki/Meetings/AppInstaller2011) organized by [Vincent](http://www.vuntz.net/journal/). It went more than well, we discussed and agreed on many things, which is great and in the end we were able to give a [presentation](http://www.youtube.com/watch?v=BHeP2ZBwS_U) + we also created a [nice AppStream wikipage](http://distributions.freedesktop.org/wiki/AppStream) as a starting point for any future work.

![appstream_meeting](/assets/appstream_meeting.jpg)

Vincent wrote a summary for [openSUSE News](http://news.opensuse.org/2011/01/26/app-installer-meeting-or-more-collaboration-accross-borders/) and a [blogpost](http://www.vuntz.net/journal/post/2011/01/25/Results-of-the-App-Installer-meeting%2C-and-some-thoughts-on-cross-distro-collaboration).

-----

This meeting was immediately followed by [Bretzn hackfest](http://en.opensuse.org/openSUSE:2011_Bretzn_Meeting) organized by [Frank](http://blog.karlitschek.de/). The main focus of it was implementing some of the things we agreed on previous meeting from the KDE/Qt perspective and porting MeeGo Garage to openSUSE. During it I was mainly dealing with appdata.xml format we described in the AppStream meeting - I created an XML schema so we can validate it and also developed a proof-of-concept generator of this piece of metadata in Python. ([git repo](http://gitorious.org/appstream)) Hope we can get it in createrepo and dpkg-scan* utilities soon.

![DSC_1674](/assets/DSC_1674.jpg)

Frank wrote a summary for [openSUSE News](http://news.opensuse.org/2011/01/27/first-bretzn-sprint-opensuse-app-store-on-the-horizon/) and a [blogpost](http://blog.karlitschek.de/2011/01/2-amazing-meetings-to-change-world.html).

-----

I would like to thank GNOME Foundation and Collabora for sponsoring the GNOME Python Hackfest, Novell for sponsoring the Bretzn Hackfest and Canonical, Debian, Mageia, Novell and Red Hat for sending their people to AppInstaller Meeting! It's really nice and encouraging to see folks from various companies working on one common goal.

And yeah, ![going-to](/assets/going-to.png) so see you there!
