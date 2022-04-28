---
layout: post
title: Trezor Emulator on Raspberry Pi
---

I got an idea while looking at the cool project called [RaspiBlitz](https://github.com/rootzoll/raspiblitz). They are using a nice LCD shield on top of Raspberry Pi for their Lightning Node. What if I tried running the [Trezor Emulator](https://github.com/trezor/trezor-firmware) on the same hardware setup? Trezor is completely open-source, so this should not be a big problem, right? Here is the result of my late-night experiment. And it's beautiful!

![trezor_raspi](/assets/trezor_raspi.jpg)

You can even connect it (via WiFi) to the Trezor [web wallet](https://wallet.trezor.io) and use it like you would use a real thing! However, [the real Trezor](http://shop.trezor.io/) is faster and smaller.

**Never use the emulator for storing any value, it's intended for testing only!**

So, what do we need to build this?

Preparation steps, they are more-or-less the same for any Raspberry Pi based projects:

* Get a Raspberry Pi 3 and [3.5 inch RPi Display](http://www.lcdwiki.com/3.5inch_RPi_Display) (SKU MPI3501)
* Download Raspbian (Raspbian Stretch with desktop) image from [Raspberry Pi website](https://www.raspberrypi.org/downloads/raspbian/)
* Unzip the image and [write it](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) to the SD card
* Put the SD card into Raspberry Pi and boot the system

Let's now install the display driver. Run the following in the terminal:

``` bash
git clone https://github.com/goodtft/LCD-show.git
cd LCD-show
sudo sh LCD35-show
```

This will do the reboot, so let's wait until Raspberry Pi starts again. You should see the internal display being used now.

Now, we'll build the Trezor emulator:

``` bash
sudo apt-get install scons libsdl2-dev libsdl2-image-dev
git clone --recursive https://github.com/trezor/trezor-firmware.git
cd trezor-firmware/core
TREZOR_EMULATOR_RASPI=1 make build_unix
```

And the Trezor Bridge:

``` bash
sudo apt-get install golang
export GOPATH=/home/pi/go
go get github.com/trezor/trezord-go
sed -i 's:127\.0\.0\.1:0.0.0.0:' $GOPATH/src/github.com/trezor/trezord-go/server/http.go
go build github.com/trezor/trezord-go
```

The `sed` command above is required, because we need the bridge to listen to remote connections too, while the original bridge only listens at localhost.

We now have everything set! Let's run the following two commands in two terminals. One is the bridge, the other one is the emulator.

``` bash
./trezord-go -e 21324
cd trezor-firmware/core ; make emu
```

Now, we want to use the Trezor Emulator running on the Raspberry Pi with the Trezor web wallet. To do that, we'll just forward the local port to the remote port (on the Raspberry Pi) and the wallet will immediately find that. Here is the magic to do that:

``` bash
socat TCP-LISTEN:21325,fork TCP:{RASPI_IP_ADDRESS}:21325
```

You need to replace `{RASPI_IP_ADDRESS}` with your Raspberry Pi IP address.

And that's it!
