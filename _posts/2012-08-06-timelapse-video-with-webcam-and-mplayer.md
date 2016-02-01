---
layout: post
title: Timelapse video with webcam and mplayer
---

Some time ago I created a timelapse video using webcam and mplayer:

<iframe width="480" height="360" src="http://www.youtube.com/embed/HHfIg74Walc" frameborder="0" allowfullscreen></iframe>

Today I was asked how I did it and because I did not remember exactly the command line options I decided to write this post to save you some time reading manpages.

First step is to grab series of JPG images from mplayer using webcam:

~~~bash
while true; do
  # grab one frame from webcam and save it as 00000001.jpg
  mplayer tv:// -vo jpeg -frames 1
  # rename 00000001.jpg to something like 1344271221.jpg
  mv 00000001.jpg $(date +%s).jpg
  # sleep 1 second
  sleep 1
done
~~~

Once we are done (break the script with Ctrl+C) we can play the sequence using:

~~~bash
mplayer mf://*.jpg
~~~

If we are satisfied with the result we can convert these images to video using mencoder (usually located in the same package as mplayer):

~~~bash
mencoder mf://*.jpg -ovc lavc -o out.avi
~~~

For more options about creating video or video formats please read mencoder manpage, but lavc output should be OK for most of you . :-)
