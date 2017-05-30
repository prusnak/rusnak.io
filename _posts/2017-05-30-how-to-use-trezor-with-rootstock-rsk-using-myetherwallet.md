---
layout: post
title: How to use TREZOR with Rootstock (RSK) using MyEtherWallet
---

Since firmware 1.5.0 [TREZOR supports Rootstock (RSK)](https://blog.trezor.io/trezor-firmware-updated-to-1-5-0-7a402d3e9f89).

To use RSK using MyEtherWallet one needs to point it to a RSK node which runs using HTTPS (not HTTP) and has correctly set Cross-Origin headers. Since there was none, I created one and sent a [pull request](https://github.com/kvhnuke/etherwallet/pull/489) to MyEtherWallet, so this chain can be used out of the box.

Until this pull request is accepted you can try it manually. Click on a menu in top-right corner, select the "Add Custom Node" item and fill in the following values:

```
Node Name:          RSK
URL:                https://rsk-test.gk2.sk
Port:               (empty)
(chain):            Custom
Supports EIP-155:   yes
Chain ID:           31
```

![rsk-mew](/assets/rsk-mew.png)

Some useful links:

* [RSK block explorer](https://explorer.rsk.co)
* [RSK faucet](https://faucet.rsk.co/)
* [RSK node stats](https://stats.rsk.co/)

HTH!
