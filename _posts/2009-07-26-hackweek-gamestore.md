---
layout: post
title: "Hackweek: Game Store"
---

{% img /content/hackweek4.jpg %}

This week we had [Hack Week](http://news.opensuse.org/2009/07/08/hack-week-iv-approaches/) event when everyone was welcome to use Innovation time on FOSS projects or even start the new one! I spent most of the time on hacking the [Game Store](http://en.opensuse.org/GameStore), which I introduced in my [previous blogpost](/gamestore/). The package is now ready for you in the Build Service.

Simply use the following One Click Install files ([openSUSE 11.0](http://software.opensuse.org/ymp/games/openSUSE_11.0/gamestore.ymp), [openSUSE 11.1](http://software.opensuse.org/ymp/games/openSUSE_11.1/gamestore.ymp) and [openSUSE Factory](http://software.opensuse.org/ymp/games/openSUSE_Factory/gamestore.ymp)) or add the `games` repository and install the `gamestore` package manually. Game Store uses this repository to download the games, so you should stay subscribed to it after the installation too.

As a bonus I created a very simple One Click Install files catalog which imitates the Game Store look. It is available at [gamestore.gk2.sk](http://gamestore.gk2.sk/).

The screenshots for both versions (left Qt, right web) are here so you get the idea how it looks, but the best thing is to try it on your own! :-)

{% img center /content/gamestore-qt.png %}

{% img center /content/gamestore-web.png %}

Big thanks go to randy-sk who helped me with harvesting of icons and screenshots of the games. I am already looking for your feedback! :-)
