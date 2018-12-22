---
layout: post
title: Idea Factory - Mycelium Animated Photos
---

This post is a part of [Idea Factory](/idea-factory/) series. One evening I found really [nice work](http://www.creativeapplications.net/processing/mycelium-processing/) by Ryan Alexander where images are created by simulating a life of mycelium. I was wondering how it was done and I came up with my own [Processing sketch](https://github.com/prusnak/processing/tree/master/myco) that creates something similar (although not as quite nice as the original work).

The principle is simple: you take an image and convert it to grayscale.
The brighter (or darker) is the pixel, the more food you put
on that particular position. Then you run several autonomous agents
that feed from this food, move randomly,
die if they are starving and multiply if they are well enough.
The original photos and the mycelium growing process can be seen here:

![img](/assets/idea-mycelium.gif)

The idea is to create a mobile phone application that
is able to take a photo from a camera (and/or open a gallery photo)
and runs the described process on it. The final result
or animated GIF of the process could be then uploaded to the Internet
and shared among your friends.
