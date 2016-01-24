---
layout: post
title: Pencil project - Sketching and Prototyping with Firefox
---

![pencil](/assets/pencil.jpg)

A few years ago, me and four of my friends were doing an university project, which was basically a web portal. While designing our application we needed a tool for creating mock-ups and screen prototypes. There are a lot of options like [Wireframe Sketcher](http://wireframesketcher.com/), [Cleverlance Petra](http://petra.cleverlance.com/), but finally we ended up with [Axure RP](http://www.axure.com/). Now I'm not sure why, but at least we had the motivation to finish the prototype early (trial period was only 30 days :D).

Today, I was again looking for the alternatives and found - [Pencil](http://www.evolus.vn/Pencil/). No, I don't mean the office aid, but the [Pencil Project](http://www.evolus.vn/Pencil/Screenshots.html). It lacks some important features like creating hyper-links between the components and thus exporting to HTML pages, but these are [planned](http://code.google.com/p/evoluspencil/issues/detail?id=3) and I can say that I really like this tool. And not to forget - it is open source! You can install it as a [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/8487) or download it as a standalone application. Unfortunately upstream tarball contains the whole XULRunner, so I decided to create a package for openSUSE. It is available from our [Contrib](http://en.opensuse.org/Contrib) repository and is only 330kB large! (Big thanks goes to [Wolfgang Rosenauer](http://www.rosenauer.org/blog/) for helping me to tame XULRunner.)

Pencil right now supports common shapes like rectangles or bitmaps, annotations, GTK widgets and Windows XP widgets. The widgets (or rather stencils) are simple SVG files, so if we help Duong Thanh An, the author, we might see Qt, [iPhone](http://www.graffletopia.com/stencils/413) or [Yahoo](http://developer.yahoo.com/ypatterns/wireframes/) stencils as a part of the Pencil in the future! Wouldn't that be sweet? :)

**Update:** I just found [Graffletopia](http://graffletopia.com/) - with hundreds of stencils (or so-called graffles) for Mac OS X tool [OmniGraffle](http://www.omnigroup.com/applications/OmniGraffle/) and some of them are really great. How about a converter ? :)
