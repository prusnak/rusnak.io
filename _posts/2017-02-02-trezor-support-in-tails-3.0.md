---
layout: post
title: TREZOR support in Tails 3.0
---

Tails project released a first beta version of their upcoming 3.0 release based on Debian 9 Stretch. See their [call for testing](https://tails.boum.org/news/test_3.0-beta1/index.en.html) for the official announcement.

There are lot of interesting changes, but the important one for me is that [TREZOR](https://trezor.io) now works out of the box in [Electrum](https://electrum.org/). No need to install any extra packages or create custom udev rules. As a bonus, you can use TREZOR from command line using `trezorctl` command.

PS: You cannot use TREZOR with our official [TREZOR Wallet](https://wallet.trezor.io) in Tails, because TOR Browser is configured in a way that it cannot reach TREZOR Bridge which is running as a localhost service.

-----

If you want to test the release in QEMU like I do, follow these steps:

1. download ISO image from the announcement above (currently `tails-amd64-3.0-beta1.iso`)
2. install QEMU
3. run `lsusb | grep TREZOR`, you should see line similar to this: `Bus 002 Device 035: ID 534c:0001 SatoshiLabs Bitcoin Wallet [TREZOR]`
4. note the numbers 002 and 035, this is the physical address of the USB device
5. run `qemu-kvm -m 2048 -cdrom tails-amd64-3.0-beta1.iso -usb -device usb-host,hostbus=2,hostaddr=35` where 2 and 35 are numbers from step above
6. if you run `lsusb` in Tails you should see the TREZOR device in the listing as well

You should never ever run Tails in a virtual machine, this is just for testing!!!
