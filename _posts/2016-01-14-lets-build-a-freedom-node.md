---
layout: post
title: Let's build a Freedom Node
---

Recently, I decided to support some of the open-source distributed projects such as [Tor](https://www.torproject.org/), [IPFS](https://ipfs.io/) and [Bitcoin](https://bitcoin.org/).

One way of supporting them would be to send them some [money as a donation](https://www.torproject.org/donate),
but because I am a hacker with a good Internet connection I decided to build a node that will directly contribute to their networks and make them bigger and more robust.

I call it a "Freedom Node".

## Hardware

I evaluated lot of options and ended up buying the following list from my local computer hardware supplier:

| item | model | price |
|------|------|------:|
| Barebone PC by Gigabyte | [GB-BXBT-1900](http://amzn.to/1TO7SyU) | $139.99 |
| 8 GB RAM by Kingston | [KVR16LS11/8](http://amzn.to/1mOhUWs) | $35.38 |
| 240 GB SSD by Crucial | [CT240BX200SSD1](http://amzn.to/1TQMXeG) | $64.99 |

I have decided to go for a solid-state drive option, but you can replace the suggested hard drive
with a cheaper rotating disk (option A) or more expensive bigger solid-state disk (option B):

| item | model | price |
|------|------|------:|
| A) 750 GB HDD by Western Digital | [WD7500BPKX](http://amzn.to/1RHIOKH) | $58.99 |
| B) 480 GB SSD by Crucial | [CT480BX200SSD1](http://amzn.to/1TQN61w) | $129.99 |

The cheapest option is around $235, while the most expensive is around $305.

And this is how it looks!

![bxbt](/assets/bxbt.jpg)

It's really small and quiet and it fits anywhere in your appartment or office, so you will completely forget about it.

## Software

Now for the software part. I am going to use CentOS, because I am used to RPM distributions, but the process should be similar if you use Debian or Ubuntu.

* Let's download CentOS from [https://www.centos.org/download/](https://www.centos.org/download/) and copy the ISO to USB flash drive.

* Follow the installation instructions and install the system.

* Add EPEL (Extra Packages) repository by running:

{% highlight bash %}
yum install epel-release
{% endhighlight %}

* Let's install Tor and Go language:

{% highlight bash %}
yum install tor golang
{% endhighlight %}

* Edit the Tor configuration file and uncomment the following lines (the first line opens the relay port, the second one disables the exit node):

{% highlight bash %}
ORPort 9001
ExitPolicy reject *:*
{% endhighlight %}

If you are more adventurous you might skip uncommenting the `ExitPolicy reject` line, but I recommend [reading something](https://blog.torproject.org/blog/tips-running-exit-node-minimal-harassment) about running an Exit Node first.

* Download and unpack Bitcoin client:

{% highlight bash %}
wget https://bitcoin.org/bin/bitcoin-core-0.11.2/bitcoin-0.11.2-linux64.tar.gz
tar xfz bitcoin-0.11.2-linux64.tar.gz
{% endhighlight %}

* Add the following files to your `~/.bashrc` file and relogin:

{% highlight bash %}
export GOPATH=$HOME/.go
export PATH=$PATH:$GOPATH/bin
{% endhighlight %}

* Install IPFS:

{% highlight bash %}
go get -u github.com/ipfs/go-ipfs/cmd/ipfs
{% endhighlight %}

* Run all three services using the following commands:

{% highlight bash %}
systemctl start tor
~/bin/bitcoind
ipfs daemon &
{% endhighlight %}

* Enjoy and big THANK YOU for your important contributions to these networks!
