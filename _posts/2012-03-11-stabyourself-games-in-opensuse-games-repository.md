---
layout: post
title: Stabyourself games in openSUSE games repository
---

In [previous blogpost](/global-game-jam-2012-hexoboros/) I mentioned my first experiments with [LÖVE](https://love2d.org/) framework for creating games. Today I found a website run by two friends called [Stabyourself](http://stabyourself.net/). They make games built on this framework and these are simply fabulous! Check out for yourself:

<iframe width="560" height="315" src="http://www.youtube.com/embed/SaoHMjS04vU?rel=0" frameborder="0" allowfullscreen></iframe>

<iframe width="420" height="315" src="http://www.youtube.com/embed/VYoKezEJoic?rel=0" frameborder="0" allowfullscreen></iframe>

<iframe width="420" height="315" src="http://www.youtube.com/embed/8edwWVSHsrY?rel=0" frameborder="0" allowfullscreen></iframe>

I was so psyched I created packages for all three of them. Simply add the [openSUSE Games](http://en.opensuse.org/Games) repository and install packages `mari0`, `orthorobot` or `nottetris2` respectively to play. Dependency packages like `love` and `lua` will be installed automatically, of course.

Enjoy!

**Update:** I was just notified that Not Tetris 2 does not work with LÖVE 0.8.0. I might try to look at it soon.
