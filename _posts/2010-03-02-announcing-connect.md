---
layout: post
title: Announcing Connect!
---

During the last [openSUSE Conference](http://en.opensuse.org/OpenSUSE_Conf_2009) we ([Benji](http://benjiweber.co.uk/), [Brent](http://mindby.com/), [Bryen](http://bryen.com/), [Francis](http://francis.giannaros.org/), [Michal](http://michal.hrusecky.net/), [Petr](http://twitter.com/ptr_uzl), [Stephen](http://decriptor.com/) and me) had a brainstorming meeting about social aspects of our community. We were able to come up with lots of ideas and I want to thank all of you for your participation!

We felt that openSUSE is missing something similar than [Ubuntu Launchpad](https://launchpad.net/) or [Fedora Community](https://admin.fedoraproject.org/community/). The discussion happened two months after [Canonical](http://canonical.com/) released their Launchpad sources to the public, so I had time to investigate both these solutions before the Conference (Fedora stuff was of course open-sourced from the start). Unfortunately, it turned out that none of these existing solutions were good for us. :-(

My next step was to investigate social networking frameworks built on Ruby on Rails platform, because most of our web infrastructure uses this framework and Ruby development stack is in a perfect shape in openSUSE. I played a lot with [Community Engine](http://communityengine.org/), [Insoshi](http://insoshi.com/) and [Lovd By Less](http://lovdbyless.com/), but finally I decided to go for [Tog](http://toghq.com/). This was the only solution that was modular (not monolithic) and seemed pretty well hackable.

I created a Tog application, ported all anonymously visible pages to our Bento theme and finally deployed it on [connect.opensuse.org](http://connect.opensuse.org/) address, so you can look at it. In the end we would like to replace the old users.opensuse.org application with Connect and make it a new central place for users. We also plan to add extra features like for example:

* user groups
* user karma or XP points
* user management (GPG+SSH keys, location, mailing lists subscriptions, IRC cloak, etc.)
* ribbons/buttons to put on your site, wordpress/facebook plugins
* business cards printing
* public API for retrieving all user information
* ...

There are plenty of ideas and I'm sure you can come up with even more! I'm announcing this in a VERY early stage of the development so you can jump in and take part in a discussion and development from the beginning. The full sources are available on [gitorious](http://gitorious.org/opensuse/connect/) and if you are interested in helping us (that does not necessarily mean coding!) don't hesitate and contact me using my [work email](http://en.opensuse.org/User:Prusnak).

For the comparison I added screenshots how my profile looks in applications I mentioned in this post:

![fedora-fas](/assets/fedora-fas.png)

![launchpad](/assets/launchpad.png)

![opensuse-connect](/assets/opensuse-connect.png)
