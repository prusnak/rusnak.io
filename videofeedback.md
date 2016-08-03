---
layout: page
title: Videofeedback
---

*Individual project (2012)*

web: [https://github.com/prusnak/videofeedback](https://github.com/prusnak/videofeedback)

{% for i in (1..6) %}
![vf{{ i }}](/assets/vf{{ i }}.jpg)
{% endfor %}

Interactive video-feedback VJing software. A camera is pointed to the computer screen, its picture is modified by a chain of custom made visual filters, which is then shown again on the very same screen. This feedback creates a complex chaotic system of colorful visuals.

The project uses OpenCV for retrieving the camera stream, which is later rendered using OpenGL and an advanced pixel-shader. The behavior of this shader is controlled by an attached MIDI controller, which in combination with a movable camera provides an easy and intuitive way how to interact with the process that generates the images. Audio can also be used to change the filter parameters resulting in visuals that react to volume and/or frequency of the recorded sound.
