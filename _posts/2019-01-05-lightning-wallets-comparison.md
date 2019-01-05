---
layout: post
title: Lightning Wallets Comparison
---

This post compares four Lightning Wallets for Android (and iOS).

Please contact me via the email in the sidebar if you want to change something and/or if you have an idea what should I add to the comparison. Thank you!

## Eclair

* summary: full blown Bitcoin/Lightning wallet, where everything is under your control
* homepage: [https://acinq.co/](https://acinq.co/)
* open source: [✔ yes, Apache License 2.0](https://github.com/ACINQ/eclair-mobile)
* Android: [✔ yes](https://play.google.com/store/apps/details?id=fr.acinq.eclair.wallet.mainnet2)
* iOS: ✖ no
* can act as Bitcoin wallet too: ✔ yes
* user controls the private keys: ✔ yes
* can receive LN funds: not yet, [promised in 2019](https://twitter.com/acinq_co/status/1081198576745803777)
* can receive LN funds with no open channel: ✖ no
* user can choose the remote LN node: ✔ yes
* user can open/close LN channels: ✔ yes
* can top up LN balance via external BTC transaction: ✖ no
* local LN routing: ✔ yes
* supports fiat exchange rates: ✔ yes (22 most common ones)

## Lightning Wallet aka BLW

* summary: similar to Eclair, but does LN routing on their servers, so finding routes for the payments might be quicker
* homepage: [https://lightning-wallet.com/](https://lightning-wallet.com/)
* open source: [✔ yes, Apache License 2.0](https://github.com/btcontract/lnwallet)
* Android: [✔ yes](https://play.google.com/store/apps/details?id=com.lightning.walletapp)
* iOS: ✖ no
* can act as Bitcoin wallet too: ✔ yes
* user controls the private keys: ✔ yes
* can receive LN funds: ✔ yes
* can receive LN funds with no open channel: ✖ no
* user can choose the remote LN node: ✔ yes
* user can open/close LN channels: ✔ yes
* can top up LN balance via external BTC transaction: ✖ no
* local LN routing: ✖ no
* supports fiat exchange rates: ✔ yes (10 most common ones)

## BlueWallet

* summary: Bitcoin wallet with Lightning functionality which is delegated to their lndhub cloud
* homepage: [https://bluewallet.io/](https://bluewallet.io/)
* open source: [✔ yes, MIT License](https://github.com/BlueWallet/BlueWallet)
* Android: [✔ yes](https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet)
* iOS: [✔ yes](https://itunes.apple.com/us/app/bluewallet-bitcoin-wallet/id1376878040
)
* can act as Bitcoin wallet too: ✔ yes
* user controls the private keys: ✔ yes
* can receive LN funds: ✔ yes
* can receive LN funds with no open channel: ✖ no
* user can choose the remote LN node: ✖ no
* user can open/close LN channels: ✖ no
* can top up LN balance via external BTC transaction: ✔ yes
* local LN routing: ✖ no
* supports fiat exchange rates: ✔ yes (EUR, USD)

## Wallet of Satoshi

* summary: quick and simple custodial Lightning-only wallet
* homepage: [https://www.walletofsatoshi.com/](https://www.walletofsatoshi.com/)
* open source: ✖ no
* Android: [✔ yes](https://play.google.com/store/apps/details?id=com.livingroomofsatoshi.wallet)
* iOS: soon
* can act as Bitcoin wallet too: ✖ no
* user controls the private keys: ✖ no
* can receive LN funds: ✔ yes
* can receive LN funds with no open channel: ✔ yes
* user can choose the remote LN node: ✖ no
* user can open/close LN channels: ✖ no
* can top up LN balance via external BTC transaction: ✔ yes (fee is 0.15%)
* local LN routing: ✖ no
* supports fiat exchange rates: ✔ yes (lots of them, 160+)
