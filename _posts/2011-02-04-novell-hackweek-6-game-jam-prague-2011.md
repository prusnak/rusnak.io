---
layout: post
title: "Novell Hackweek #6 / Game Jam Prague 2011"
---

![se-liveview](/assets/se-liveview.jpg)

Last week we had a Hackweek at Novell. I decided to do something rather unusual for me - to hack a device. I bought one of these nifty [LiveView](http://www.sonyericsson.com/cws/products/accessories/overview/liveview) devices made by Sony Ericsson, which are basically an intelligent watch that can connect to your mobile phone using Bluetooth. Unfortunately, it turned out to be rather unusable with Android devices (lots of Bluetooth disconnects), but supposedly a firmware update is on its way. After I saw that, I was somehow disappointed but I thought there must be a way how to reverse engineer a protocol and try to connect the device to my computer. I started to look around on the Internet and found a great blog by [Andrew de Quincey](http://adq.livejournal.com/). What was even more cool was that Andrew already did most of the job and wrote some code in Python. All I had to do is to wrap it into classes to make it more general and thus customizable. So what's next? My dream is to create a custom open-source firmware and flash the device. I hope I can achieve this with help of hardware wizards from our [Prague hackerspace](http://brmlab.cz/project/liveview). The source code is available from [gitorious](http://gitorious.org/brmlab/liveview) as usual. Do you think that Hackweek lasted only until Friday for me? Well, not really, keep reading ... :-)

-----

![ggj](/assets/ggj.jpg)

When I was last time in [Germany](/gnome-python-hackfest-appinstaller-meeting-and-bretzn-hackfest/), [Leinir](http://leinir.dk/) told me about an event called [Global Game Jam](http://www.globalgamejam.org/). I liked its idea very much - 48-hour game coding marathon. I was amused when a couple of days later (just one day before the event took place) my friends [Split](http://twitter.com/split82), [Lokiman](http://twitter.com/lokimansk) and Frem told me about the Prague chapter called [Game Jam Prague](http://www.gamejamprague.org/) and invited me to join them. We decided to go there under the name they already used for a couple of their projects - [Hyperbolic Magnetism](http://hyperbolicmagnetism.com/) aka [@hypmag](http://twitter.com/hypmag).

The event started on Friday evening. When we arrived, the place was already full of other teams preparing their stuff. This was very different from other (mostly open-source related) events I attend where I usually know at least a few people. Here, I knew no one except my team! :-) At around 6pm we were given a topic that should be somehow present in our game - *Extinction*. I was very surprised that we were able to brainstorm over 15 ideas in less than half an hour. Later we discarded most of them (because they were too obvious or too complex) and we ended up with two.

We agreed that for idea one to be successful we would need to create nice graphics and because none of us was confident enough, we decided to pick the another one where simple graphics would suffice. So we started to work on a game with the working title "Nations". The idea was really simple: you have a couple of nations, represented by triangles (people) moving inside the circle (border). Each nation expands in time and when the circles start to overlap, triangles inside the intersection start to fight together. Moreover, if the nation is big enough, it starts to produce A-bombs which are then launched at other nations. Your task is to maintain balance between the nations, so none of them is completely destroyed. This is achieved by applying positive or negative force on some places of the game area. Positive force causes affected triangles to reproduce more, negative force causes the affected triangles to disappear. We implemented basic behaviour of the game mechanics and went to sleep on Saturday morning.

We met again on Saturday evening and we coded and tweaked and coded and tweaked ... It was a long way, but at some point (I guess it must have been something around Sunday 4AM) we realised we want to change the whole game logic completely. How about we had only two types of nations - green controlled by the user and cyan ones by AI? What if player could decide to split the nation into two halves or join two nations into a bigger one? Bigger nation of course produces A-bombs faster, but is also easier to target. We replaced most of the code and I started to work on an AI, which suddenly became necessary. We worked until Sunday noon when we were finally satisfied with the result. In the meanwhile Split composed a great music track and we quickly hacked game menu, intro screen and other cosmetic stuff. That's how it looked in the end:

![ggj11-nuclear-crisis-logo](/assets/ggj11-nuclear-crisis-logo.png)

![ggj11-nuclear-crisis-iphone](/assets/ggj11-nuclear-crisis-iphone.png)

I'll attach the gameplay video to give you even better idea how the game is played:

<iframe title="YouTube video player" width="560" height="345" src="http://www.youtube.com/embed/JdRjlPJ0ay0?rel=0" frameborder="0" allowfullscreen></iframe>

At the end of the event all contestants judged the produced games and the first three places were announced - [check the list](http://www.gamejamprague.org/hry) for all other games and the result. The first team also got a very nice pacman-themed cake (which was also very tasty, thanks for sharing!). Although we didn't make it into the Top 3, I think it was a great success for us. We tried something completely new and we also met a lot of interesting people (one of them being Antonin, author of the legendary [TotalFinder](http://totalfinder.binaryage.com/)). I also hope that we'd be able to finish the game and publish it into Apple App Store (and probably later into Android Market).

![179638_194546517237518_162802187078618_726903_3532401_n](/assets/179638_194546517237518_162802187078618_726903_3532401_n.jpg)

![ggj11-all](/assets/ggj11-all.jpg)

![ggj11-cake](/assets/ggj11-cake.jpg)

Finally I present you the photo of amazing Hyperbolic Magnetism shortly after we submitted our game at the end of the 48-hour session. :-)

![ggj11-hypmag](/assets/ggj11-hypmag.jpg)

See you next year!
