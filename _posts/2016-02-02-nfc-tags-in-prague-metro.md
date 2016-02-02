---
layout: post
title: NFC Tags in Prague Metro
---

Prague Metro is full of advertisements, which are posters put in frames like this:

![nfc-metro](/assets/nfc-metro.jpg)

Have you noticed something interesting in the picture?

How about now?

![nfc-metro-detail](/assets/nfc-metro-detail.jpg)

Don't worry, I haven't notice that either at first, until my friend Sargon pointed me to it.

So this white circle looks like a NFC tag. Let's try it out!

I am using Nexus 5 phone with [NFC TagInfo by NXP](https://play.google.com/store/apps/details?id=com.nxp.taginfolite) application installed.

This is how it looks when you approach the tag with this app running:

![nfc-metro-a-reader1](/assets/nfc-metro-a-reader1.png)

![nfc-metro-a-reader2](/assets/nfc-metro-a-reader2.png)

![nfc-metro-a-reader3](/assets/nfc-metro-a-reader3.png)

![nfc-metro-a-reader4](/assets/nfc-metro-a-reader4.png)

The most important thing on the last screen are dots that appear between the sector number and its contents. This means that the area is **unlocked and writable** (x means locked, . unlocked). Yay!

Why is the tag not locked and anyone can write to it? I can only speculate, but I think that's because the advertisement company uses the tags to track which frame has which ad and they care only about the tag ID, which cannot be overwrittern.

Let's try another application called [NFC TagWriter by NXP](https://play.google.com/store/apps/details?id=com.nxp.nfc.tagwriter).

![nfc-metro-b-writer1](/assets/nfc-metro-b-writer1.png)

Select `Write tags` button.

![nfc-metro-b-writer2](/assets/nfc-metro-b-writer2.png)

Select `New dataset`

![nfc-metro-b-writer3](/assets/nfc-metro-b-writer3.png)

I will be creating a link, so I choose `Link`.

![nfc-metro-b-writer4](/assets/nfc-metro-b-writer4.png)

After filling in the details I click `Save`.

![nfc-metro-b-writer5](/assets/nfc-metro-b-writer5.png)

Now I can select data from my list.

![nfc-metro-b-writer6](/assets/nfc-metro-b-writer6.png)

Let's write it by clicking on `Write`!

![nfc-metro-b-writer7](/assets/nfc-metro-b-writer7.png)

Now we can touch the tag.

![nfc-metro-b-writer8](/assets/nfc-metro-b-writer8.png)

**Success!**

Now when we approach the tag with the phone, Android will read the tag, interpret the URL and open browser with this address.

The information on the tag can be used to trigger lots of other events too. Call a number, send an email, launch an application, show plain text or send or receive bitcoins (when `bitcoin:address` URI scheme or Bitcoin private key is used).

When we use the TagInfo application now, it will look like this:

![nfc-metro-c-reader1](/assets/nfc-metro-c-reader1.png)

![nfc-metro-c-reader2](/assets/nfc-metro-c-reader2.png)

![nfc-metro-c-reader3](/assets/nfc-metro-c-reader3.png)

![nfc-metro-c-reader4](/assets/nfc-metro-c-reader4.png)

![nfc-metro-c-reader5](/assets/nfc-metro-c-reader5.png)

When I was experimented with the tags, I haven't found any which had any data stored in it.

I hope next time I try this, there will be some nice poems (106 chars maximum) or links to some nice pictures.
Heck, someone could even create an interesting augmented reality game, capture the flag, check-in (who wants to be a mayor of this train?) or ...

The only limit is your imagination. And slow internet in the metro (and none in the tunnels). :-(
