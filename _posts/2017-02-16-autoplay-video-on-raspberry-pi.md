---
layout: post
title: Autoplay video on Raspberry Pi
---

*This is a complement of [Image slideshow on Raspberry Pi](/image-slideshow-on-raspberry-pi/) post.*

Lots of (art) people are using Raspberry Pi instead of DVD players and MP4 players for their installations that play videos in loop.
There are many ways how to achieve the result, but the one I liked the most is the following:

1. download Raspbian Lite from [raspberrypi.org](https://www.raspberrypi.org/downloads/raspbian/)
2. copy the downloaded image to the SD card, e.g. `sudo dd_rescue 2020-02-13-raspbian-buster-lite.img /dev/mmcblk0`
3. boot Raspberry Pi into freshly installed Raspbian
4. copy your video from USB flash drive to the SD card
5. `sudo apt-get update`
6. `sudo apt-get install omxplayer`
7. append this line `/usr/bin/omxplayer -b --loop /home/pi/*.mp4` to file `/etc/rc.local`
8. set the file as executable: `chmod +x /etc/rc.local`
9. reboot and enjoy!

If you want something more magical (that can discover and autoplay all video files on attached USB stick), you can try [VideoPi](https://videopi.saloun.cz/) project by my friend [Jakub](https://www.jakubvalenta.cz/).
