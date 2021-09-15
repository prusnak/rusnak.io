---
layout: post
title: How to send Bitcoin transactions via SMS
---

Today Blockstream announced their [Satellite](https://blockstream.com/satellite/) project. I was thinking about exactly that for quite long time, ever since this [DVB-T broadcast experiment](http://kryptoradio.koodilehto.fi/) in 2014. No need to say I am very excited about this development. One of the recurring questions I saw was this one: What about the other direction (from user to Bitcoin node)?

Well, there are many options. One of them is sending new transactions via SMS or some other "legacy" method, if the Internet is not usable (blocked by the government, etc.).

I decided to create a simple proof of concept experiment. The source code is available from my [GitHub repository](https://github.com/prusnak/smspushtx).

First, I had to register with a service provider which is able to process inbound/incoming SMS. One of them is [Nexmo](https://www.nexmo.com/), but there are also others, such as Twilio or Tropo. I decided to go with Nexmo, because they have relatively cheap virtual numbers and also one does not have to pay for incoming messages, which exactly matches our use case!

After getting a virtual number (this is just 0.90 EUR/month for US numbers and some EU numbers), I was able to set up a Nexmo webhook which is triggered on each received SMS message. This webhook is pointed at a very simple Flask server, which consumes the messages, concatenates them when needed and pushes them to Trezor backends, which will propagate them to the Bitcoin network.

Below is the screenshot of the base64 encoded transaction I sent to my service. It's already [mined in the blockchain](https://btc1.trezor.io/tx/d72ccc13fcbe9ea22ef60c4c5123c9825e7c56740e566ee1c3456471684b4b4e) after being successfully broadcasted via my service to the Bitcoin network. You can also use hex encoded transactions.

The most important info - the phone number of the SMS relay service is the following:

**+1 (863) 248-2646** or **+1 (863) BIT-COIN**

Enjoy! :-)

![smspushtx](/assets/smspushtx.png)
