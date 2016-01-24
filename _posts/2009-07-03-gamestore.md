---
layout: post
title: Game Store
---

I was adding some new packages to our [games](http://download.opensuse.org/repositories/games/) repository in openSUSE Build Service, when I realized that we have over 150 games at this one centralized place! Wouldn't it be great if there was an application which would allow users to browse through games, filter them by genres or names, view the screenshots and read the information about the games? Players usings Windows can already use  "Games for Windows" or "Steam" from Valve, but they also have to pay for the majority of the games. All games in our repository are free and just one click away! I started to hack an application with pretty concrete idea in my mind. You can look at the result of my efforts below (left Games for Windows, right Game Store):

{% img center /content/games_for_windows.jpg %}

{% img center /content/gamestore.jpg %}

As you can see, Game Store is at the moment quite immature Qt application (actually it is my first Qt app, so my Qt skills suck pretty much right now :-) ), but it is already able to load locally stored XML together with game icons, screenshots and descriptions. User can install new games (using our great One Click Install feature) and launch the installed ones. Later I want to add the ability to synchronize your games settings (configuration + saved games) with Game Store server, so you can have these on any computer and the server could create a hi-score charts for every supported game. There is a long way ahead to go, but I wanted to approach you very early, so you could be involved too. Even if you don't speak C++ or Qt, you can help us with filling the missing descriptions, gathering game icons and screenshots. Just read the [GameStore](http://en.opensuse.org/GameStore) wiki page to get the idea what needs to be done or clone the [git repo](http://gitorious.org/opensuse/gamestore) and start hacking right away! :-)

Thank you and I hope that GameStore will be a great addition to other openSUSE applications and tools we already have!

**Update:** See the [next blogpost](/hackweek-gamestore/) for more information.
