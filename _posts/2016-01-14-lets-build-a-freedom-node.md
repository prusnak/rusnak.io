---
layout: post
title: Let's build a Freedom Node
---

Recently, I decided to support some of the open-source distributed projects such as [Tor](https://www.torproject.org/), [IPFS](https://ipfs.io/) and [Bitcoin](https://bitcoin.org/).

One way of supporting them would be to send some [money as a donation](https://www.torproject.org/donate),
but because I am a hacker with a good Internet connection I decided to build a computer node that will directly contribute to their networks and make them bigger and more robust.

I call it a "Freedom Node".

## Hardware

I evaluated lot of options and ended up buying the following components from my local computer hardware supplier:

| item | model | price |
|------|------|------:|
| Barebone PC by Gigabyte | [GB-BXBT-1900](http://amzn.to/1TO7SyU) | $139.99 |
| 8 GB RAM by Kingston | [KVR16LS11/8](http://amzn.to/1mOhUWs) | $35.38 |
| 240 GB SSD by Crucial | [CT240BX200SSD1](http://amzn.to/1TQMXeG) | $64.99 |

I have decided to go for a solid-state drive option, but you can replace the suggested hard drive
with a cheaper rotating disk (option A) or even bigger more expensive solid-state disk (option B):

| item | model | price |
|------|------|------:|
| A) 750 GB HDD by Western Digital | [WD7500BPKX](http://amzn.to/1RHIOKH) | $58.99 |
| B) 480 GB SSD by Crucial | [CT480BX200SSD1](http://amzn.to/1TQN61w) | $129.99 |

The cheapest option is around $235, while the most expensive is around $305.

And this is how it looks! Nice, isn't it?

![bxbt](/assets/bxbt.jpg)

It is really small and quiet and it fits anywhere in your appartment or office, so you will completely forget about it.

## Software

Now for the software part. I am going to use CentOS, because I am used to RPM distributions, but the process should be similar if you use Debian or Ubuntu.

* Let's download CentOS from [https://www.centos.org/download/](https://www.centos.org/download/) and copy the ISO to a USB flash drive.

* Follow the installation instructions and install the system.

* Add EPEL (Extra Packages) repository by running:

~~~bash
yum install epel-release
~~~

* Add Ringing Liberty Bitcoin repository by running:

~~~bash
yum install https://linux.ringingliberty.com/bitcoin/el7/x86_64/bitcoin-release-2-1.noarch.rpm
~~~

* Install Tor, Bitcoin and Go language:

~~~bash
yum install tor bitcoin-server golang
~~~

(If you want to use Bitcoin XT instead of Bitcoin Core just use `bitcoinxt-server` package instead of `bitcoin-server` in the line above.)

* Edit the Tor configuration file `/etc/tor/torrc` and uncomment the following lines (the first line opens the relay port, the second one enables the directory service, the third one disables the exit node):

~~~
ORPort 9001
DirPort 9030
ExitPolicy reject *:*
~~~

Also fill in the details on lines with `Nickname` and `ContactInfo`.

If you are more adventurous you might skip uncommenting the `ExitPolicy reject` line, but I recommend [reading something](https://blog.torproject.org/blog/tips-running-exit-node-minimal-harassment) about running an Exit Node first.

* Edit the Bitcoin configuration file `/etc/bitcoin/bitcoin.conf` and change RPC password to something random:

~~~ini
rpcuser=bitcoinrpc
rpcpassword=something_random_like_8aRuH7Dxa0NBegBWLVNTndF_but_longer
~~~

* Add the following files to your `~/.bashrc` file and relogin:

~~~bash
export GOPATH=$HOME/.go
~~~

* Install IPFS and make a symlink to `/usr/bin`:

~~~bash
go get -u github.com/ipfs/go-ipfs/cmd/ipfs
ln -s /root/.go/bin/ipfs /usr/bin/ipfs
~~~

* Initialize IPFS node:

~~~bash
ipfs init
~~~

* Create IPFS systemd service file `/usr/lib/systemd/system/ipfs.service` and put the following contents in it:

~~~ini
[Unit]
Description=IPFS daemon
After=network.target

[Service]
ExecStart=/usr/bin/ipfs daemon
Restart=on-failure

[Install]
WantedBy=multiuser.target
~~~

* Run and enable start at boot for all three services using the following commands:

~~~bash
systemctl enable bitcoin
systemctl start bitcoin

systemctl enable tor
systemctl start tor

systemctl enable ipfs
systemctl start ipfs
~~~

* Enjoy and big THANK YOU for your important contribution to these networks!
