---
layout: post
title: Image slideshow on Raspberry Pi
---

*This is a complement of [Autoplay video on Raspberry Pi](/autoplay-video-on-raspberry-pi/) post.*

Lots of (art) people are using Raspberry Pi to show image slideshow in loop.
There are many ways how to achieve the result, but the one I liked the most is the following:

1. download Raspbian Lite from [raspberrypi.org](https://www.raspberrypi.org/downloads/raspbian/)
2. copy the downloaded image to the SD card, e.g. `sudo dd_rescue 2020-02-13-raspbian-buster-lite.img /dev/mmcblk0`
3. boot Raspberry Pi into freshly installed Raspbian
4. run `sudo raspi-config` and set Boot to Automatic login (`3 Boot Options` > `B1 Desktop / CLI` > `B2 Console Autologin`)
4. copy your images from USB flash drive to the SD card (`/media` folder)
5. `sudo apt-get update`
6. `sudo apt-get install fbi`
7. append this line `/usr/bin/fbi --device /dev/fb0 --autozoom --blend 2000 --timeout 5 --noverbose --random $(find /media -type f)` to file `/home/pi/.bashrc`
9. reboot and enjoy!
