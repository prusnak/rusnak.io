---
layout: post
title: " Games in the openSUSE Build Service"
---

We decided to restructure and cleanup the games projects in the openSUSE Build Service. Before the change we had 8 projects for each game genre (action, adventure, arcade, board, puzzle, roleplay, strategy/realtime, strategy/turn-based) and one separate project for game libraries (so you can play games even on older distributions with obsoleted libraries).

This situation was causing more harm than good, so now we will only have one "games" repository with all game genres together. If you have already added old game repositories, please remove them and add the brand new one located [here](http://download.opensuse.org/repositories/games/) and then the directory of your distribution. The old URLs for the individual games repositories **will no longer work**.

If your favorite game is not yet packaged you can add it to the [Games Wishlist](http://en.opensuse.org/Wishlist_Games) at openSUSE wiki. Or even better, you can try to package it by yourself and when you are finished contact me and we will add the game to the repository. You can also ask on the [opensuse-packaging@opensuse.org](http://lists.opensuse.org/opensuse-packaging) ([subscribe](mailto:opensuse-packaging+subscribe@opensuse.org)) mailing list you have any troubles with the packaging.

Game On!
