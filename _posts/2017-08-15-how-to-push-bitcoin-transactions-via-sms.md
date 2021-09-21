---
layout: post
title: How to send Bitcoin transactions via SMS
---

Blockstream announced today their [Satellite](https://blockstream.com/satellite/) project.
This is exactly what I've been thinking about for a long time, since the [DVB-T broadcasting experiment](https://kryptoradio.koodilehto.fi/) in 2014.
Needless to say, I'm very excited about this development.
One of the recurring questions I saw was this: What about the opposite direction (from user to Bitcoin node)?

There are many options.
One of them is to send new transactions via SMS or other "legacy" methods if the internet is not available (blocked by the government, etc.).

I decided to create a simple proof of concept experiment.
The source code is available in my [GitHub repository](https://github.com/prusnak/smspushtx).

First, I had to register with a service provider that is capable of handling incoming/inbound SMS.
One of them is [Nexmo](https://www.nexmo.com/), but there are others such as Twilio or Tropo.
I opted for Nexmo because they have relatively cheap virtual numbers and also one doesn't have to pay for incoming messages, which fits our use case exactly!

After getting a virtual number (for US numbers and some EU numbers, it's only €0.90/month), I was able to set up a Nexmo webhook that triggers whenever I receive a text message.
This webhook is pointed at a very simple Flask server that consumes the messages, concatenates them if necessary, and sends them to backends that propagate them to the Bitcoin network.

Below is a screenshot of a base64 encoded transaction I sent to my service.
It is already [mined in the blockchain](https://btc1.trezor.io/tx/d72ccc13fcbe9ea22ef60c4c5123c9825e7c56740e566ee1c3456471684b4b4e) after it was successfully broadcast via my service to the Bitcoin network.
being successfully broadcasted via my service to the Bitcoin network. **You can also use transactions encoded in hexadecimal.**

The most important information - the phone number of the SMS relay service is as follows:

**+1 (863) 248-2646** or **+1 (863) BIT-COIN**

Enjoy! :-)

![smspushtx](/assets/smspushtx.png)

## Sending messages longer than 160 characters

Modern GSM phones can automatically split longer messages into 160-character chunks.
These are automatically joined together correctly on the server.

If your phone can't do this automatically, you can do it manually by prefixing each message with the following scheme:

* `(1/2)` and `(2/2)` for 2 messages
* `(1/3)`, `(2/3)` and `(3/3)` for 3 messages
* `(1/4)`, `(2/4)`, `(3/4)`, and `(4/4)` for 4 messages
* etc.

The space after the bracket is not necessary.
