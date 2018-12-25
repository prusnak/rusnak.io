---
layout: post
title: How to push Bitcoin transactions via SMS
---

Blockstream announced today their [Satellite](https://blockstream.com/satellite/) project. I was thinking about exactly that for quite long time, ever since this [DVB-T broadcast experiment](http://kryptoradio.koodilehto.fi/) in 2014. There are lot of sceptics, but I am very excited about this development. One of the recurring questions I saw was this one: What about the other direction (from user to Bitcoin node)?

Well, there are many options. One of them is sending new transactions via SMS or some other "legacy" method, if the Internet is not usable (blocked by the government, etc.).

I decided to create a simple proof of concept experiment named SMSPushTX. The source code is available from my [GitHub repository](https://github.com/prusnak/smspushtx).

First, I had to register at some service provider which is able to process inbound/incoming SMS. One of them is for example [Nexmo](https://www.nexmo.com/), but there are others, such as Twilio or Tropo. I decided to go with Nexmo, because they have relatively cheap virtual numbers and also one does not have to pay for incoming messages, which is exactly what we (do not) want in our scenario!

After getting a virtual number (this was just 0.50 EUR/month for Belgian numbers), I was able to set up a Nexmo webhook which is triggered on each received SMS message. This webhook is pointed at my very simple Flask server in `smspushtx.py`. It consumes messages and forwards them to `process_msg` function in `messages.py`. There is a catch, though. If a message is longer than 160 characters, you'll need to concatenate it in your software manually, because Nexmo will send you a notification for every chunk separately. Luckily, that was quite easy, because you also get number of chunks and sequence number of current chunk in every notification.

Example of the incoming notifications:

```python
{
    'concat-ref': '16',
    'msisdn': 'xxxxxxxxxxxx',
    'messageId': '0C000000538BA945',
    'concat-total': '2',
    'message-timestamp': '2017-08-15 21:04:16',
    'concat-part': '1',
    'concat': 'true',
    'type': 'text',
    'to': 'xxxxxxxxxxx',
    'text': 'AQAAAAGKDYUXkeV/1wYLUD82slBs++d1BG+3l3VDzQsCk06KtAQAAABrSDBFAiEAhnJOYrejTqK/yeC7trGn/RhmQ13cCLjgI7KFmpPxxf4CIEj599L7S7r/WNFw63178y2cUHbQPtquhs3JtAcxxzyZA',
    'keyword': 'AQAAAAGKDYUXKEV/1WYLUD82SLBS',
}

{
    'concat-ref': '16',
    'msisdn': 'xxxxxxxxxxxx',
    'messageId': '0C000000538BAAA6',
    'concat-total': '2',
    'message-timestamp': '2017-08-15 21:04:17',
    'concat-part': '2',
    'concat': 'true',
    'type': 'text',
    'to': 'xxxxxxxxxxx',
    'text': 'SECK8N3vuXGrfZcC+wxfzyXVJtOnRaDDVVgU6RP/7vIKJj/////AgcEMwAAAAAAGXapFFmMuQgji+WAXhfI8FA1PGHHV8ZeiKxAQg8AAAAAABl2qRQkNDDiX+4AeooHtEj57drd3FbY54isAAAAAA==',
    'keyword': 'SECK8N3VUXGRFZCC',
}
```

Once the message is correctly concatenated, we can push it to Insight server using its API. I decided to allow two formats of transactions: hexadecimal format and base64 format. If sender uses the latter, we need to convert it to hexadecimal and only push to Insight server afterwards. This is done in `pushtx` function of `messages.py`.

That's it! That was easy right?! Remember, this is just a quick & dirty proof of concept and lots of things can (and should) be improved. But if one person is able to do something like this within 90 minutes with 10 EUR budget (10 EUR is minimum Nexmo payment, you will get 2 EUR as bonus, what translates to 2 years of Belgian number!), imagine what could be done with a little bit more resources!

Below is the screenshot of the base64 encoded transaction I sent to my service. It's already [mined in the blockchain](https://blockchain.info/tx/d72ccc13fcbe9ea22ef60c4c5123c9825e7c56740e566ee1c3456471684b4b4e) after being successfully broadcasted via my service to the Bitcoin network.

![smspushtx](/assets/smspushtx.png)
