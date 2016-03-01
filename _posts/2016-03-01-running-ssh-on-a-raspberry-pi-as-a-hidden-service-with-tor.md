---
layout: post
title: Running SSH on a Raspberry Pi as a Hidden Service with Tor
---

Have you ever tried to solve the following problem? I did. Many times.

You have just finished installing a brand new Internet node, but you need to connect to it (usually using SSH) to perform some tasks. The issue is that this node usually lies behind NAT, does not have a public IP, its local IP keeps changing or even worse even the public IP is changed by ISP from time to time.

This problem is usually solved by port forwarding on a router that has the public IP, but this is not very usable in more complex network environments.

Another option is to create a VPN where you connect your node, but this requires quite a big effort to get it working (both server and client side).

There is another way, which I find quite easy and elegant at the same time. Let's use a Hidden Service created via Tor network! We don't really need anonymity in this case, but it comes as a nice bonus.

I will use Raspberry Pi and Raspbian Jessie in this example, but this should work almost anywhere with small changes.

* Login to Raspberry Pi and enable SSH daemon if it was not enabled (it is on by default in Raspbian).

* All commands below should be run as root, so either spawn a root shell using `sudo -i` or prepend each line with `sudo`.

* Update the system and install Tor package:

``` bash
apt-get update
apt-get install tor
```

* Edit the Tor configuration file `/etc/tor/torrc` and add the following lines:

```
HiddenServiceDir /var/lib/tor/sshd/
HiddenServicePort 22 127.0.0.1:22
```

* Create the directory you specified above for the SSH hidden service:

``` bash
export SERVICE_DIR=/var/lib/tor/sshd/
mkdir $SERVICE_DIR
chmod 700 $SERVICE_DIR
chown debian-tor.debian-tor $SERVICE_DIR
```

* Enable and start the Tor service:

```
systemctl enable tor
systemctl start tor
```

* If everything went OK, you are able to print the hidden service hostname using:

``` bash
cat $SERVICE_DIR/hostname
```

* Which should print something like this:

```
vxbdqtv2ber7js5y.onion
```

* Your node is now available from anywhere in the world using this onion address! But how do we connect to it?

* You need to install and start Tor on your local computer in a similar fashion you got it running on Pi, but don't create a hidden service there.

* Once Tor is running locally, open your SSH config (`~/.ssh/config`) and add the following:

```
Host *.onion
  ProxyCommand /usr/bin/nc -xlocalhost:9050 -X5 %h %p
```

* You can now connect to your node using SSH and hostname from above:

```
ssh pi@vxbdqtv2ber7js5y.onion
```

* Congratulations!

The Internet of Things is so 2015. Let's give a big welcome to the "Darknet of Things" or **#DoT**. :-)

--------

If you want to make your connections even more secure using `HiddenServiceAuthorizeClient` option, see this [Nurdletech post](http://www.nurdletech.com/linux-notes/ssh/hidden-service.html).

Trick using host wildcard in SSH config is inspired from [rtyler's post](http://unethicalblogger.com/2012/06/13/ssh-as-a-hidden-service.html).

For further reading I recommend [Hidden Service Configuration Instructions](https://www.torproject.org/docs/tor-hidden-service) from Tor project website.
