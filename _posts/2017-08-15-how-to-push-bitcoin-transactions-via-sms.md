---
layout: post
title: How to push Bitcoin transactions via SMS
---

Blockstream announced today their [Satellite](https://blockstream.com/satellite/) project. I was thinking about that for quite long time, ever since this [DVB-T broadcast experiment](http://kryptoradio.koodilehto.fi/) in 2014. There are lot of sceptics, but I am very excited about this development.

One of the recurring questions was: What about the other direction (from user to Bitcoin node)? Well, there are many options. One of them is sending new transactions via SMS or some other "legacy" method, when the Internet is not usable.

I decided to create a simple Proof of Concept experiment which I call SMSPushTX. The source code is available from my [GitHub repository](https://github.com/prusnak/smspushtx).

First, I had to register at some service provider which is able to process inbound/incoming SMS. One of them is [Nexmo](https://www.nexmo.com/), but there are others, such as Twilio or Tropo. I decided to go with Nexmo, because they have relatively cheap virtual numbers and also one does not have to pay for incoming messages, which is exactly what we want!

After getting a virtual number (this was just 0.50 EUR/month for Belgian numbers), I was able to set up a Nexmo webhook which is triggered on each received message. This webhook is pointed at my very simple Flask server in `smspushtx.py`. It forwards consumed messages to `process_msg` function in `messages.py`. There is a catch, though. If a message is longer than 160 characters, you need to concatenate it in your software, because Nexmo will send you a notification for every chunk separately. Luckily, that was quite easy, because you will also get number of chunks and sequence number of current chunk on every notification.

Once the message is correctly concatenated, we can push it to Insight server. I decided to allow two formats of transactions: hex format and base64 format. If sender uses the latter, we need to convert it to hex and only push to Insight server afterwards. This is done in `pushtx` function.

That's it! That was easy right?! Remember, this is just a Proof of Concept, but if one person is able to do something like this in 90 minutes with 10 EUR budget (10 EUR is minimum payment, you will get 2 EUR as bonus, what means 2 years of Belgian number!), image what could be done with a little bit more resources!

Oh, I almost forgot. Below is the screenshot of the base64 encoded transaction I sent to my service.

You can try sending your transactions via SMS here: **+32 460 213 730**. I will keep the service running for some time. Enjoy! :-)

![smspushtx](/assets/smspushtx.png)
