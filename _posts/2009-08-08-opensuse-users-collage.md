---
layout: post
title: openSUSE Users Collage
---

Today I stumbled upon blogpost by [Andreas Gohr](http://www.splitbrain.org/personal) called [identi.ca Mosaic](http://www.splitbrain.org/blog/2009-07/31-identi.ca_mosaic). He took 30.000 avatars of [identi.ca](http://identi.ca/) users and created a mosaic from them using the [metapixel](http://www.complang.tuwien.ac.at/schani/metapixel/) software. What a great idea! How about doing something similar for openSUSE folks?

We hadn't metapixel packaged in openSUSE, so I created the package in [Contrib](http://en.opensuse.org/Contrib) repository. Then I started collecting the avatars of openSUSE users. I searched both [twitter](http://twitter.com/) and [identi.ca](http://identi.ca/) for messages containing "opensuse" and added the authors' avatars to the pool. Identi.ca also has groups, so all members of [openSUSE group](http://identi.ca/group/opensuse/) ended there as well. [Facebook](http://www.facebook.com/) contains both [openSUSE group](http://www.facebook.com/group.php?gid=2256834487) and [openSUSE page](http://www.facebook.com/pages/OpenSUSE/16720390225) so I grabbed all avatars I found there too. At the end I was able to collect 3760 avatars of people using or interested in openSUSE!

I started experimenting with metapixel, but because I still had 10 times less images available than Andreas, I was not able to produce very good results. Fortunately, I discovered `-c` option, which tries to create a collage instead of a mosaic, which looks much better. (Mosaic has photos arranged in a rectangular grid, while collage does not.) After some fiddling I was able to create the following pictures. I hope you like them! :-) (use right click and "Save as" when downloading hi-res images)

![opensuse-users-collage-1024](/assets/opensuse-users-collage-1024.jpg)

hi-res: [6000x3754](/assets/openSUSE_Users_Collage.jpg)

![opensuse-users-collage-2-1024](/assets/opensuse-users-collage-2-1024.jpg)

hi-res: [6000x3750](/assets/openSUSE_Users_Collage_2.jpg)

If you'd like to play with the parameters I give you the [tarballed avatars](/assets/opensuse-users.tar.bz2) (6 MiB), [original images](/assets/collage-sources.tar.bz2) (1 MiB) and the command lines I used to produce the image:

{% highlight bash %}
tar xfj opensuse-users.tar.bz2
tar xfj collage-sources.tar.bz2
mkdir ./opensuse-users-ready
metapixel-prepare --width=48 --height=48 ./opensuse-users ./opensuse-users-ready
metapixel -c -l ./opensuse-users-ready -w 48 -h 48 -m wavelet -d 500 -e global --metapixel opensuse-logo-6000.png opensuse-users-collage.png
metapixel -c -l ./opensuse-users-ready -w 48 -h 48 -m wavelet -d 300 -e global --metapixel chameleon.jpg opensuse-users-collage-2.png
{% endhighlight %}

Enjoy! (Don't forget to install `metapixel` package from Contrib.)

**Update:** Lubomir Rintel tried to do a similar collage for Fedora users, check [his version](http://v3.sk/~lkundrak/blog/entries/metapixel.html).
