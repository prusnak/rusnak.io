---
layout: post
title: How to build Bitcoin for Android
---

The easiest way how to build [Bitcoin](https://bitcoincore.org) for Android is to use Docker.

Here is the `Dockerfile`:

```
ARG SDK_VERSION=28
ARG NDK_VERSION=23.1.7779620
ARG BUILDTOOLS_VERSION=28.0.3

FROM androidsdk/android-${SDK_VERSION}

ARG SDK_VERSION
ARG NDK_VERSION
ARG BUILDTOOLS_VERSION

RUN sdkmanager --install "ndk;${NDK_VERSION}"
RUN sdkmanager --install "build-tools;${BUILDTOOLS_VERSION}"

# ANDROID_SDK is already set to /opt/android-sdk-linux
ENV ANDROID_NDK="${ANDROID_SDK}/ndk/${NDK_VERSION}"
ENV ANDROID_TOOLCHAIN_BIN="${ANDROID_NDK}/toolchains/llvm/prebuilt/linux-x86_64/bin"
ENV ANDROID_API_LEVEL="${SDK_VERSION}"
ENV HOST="aarch64-linux-android"

RUN apt-get update
RUN apt-get install -y autoconf automake libtool make pkg-config
RUN apt-get install -y gradle
```

Now run the following to build the image:

```
docker build -t android-bitcoin .
```

Let's clone the Bitcoin source code and run the container:

```
git clone https://github.com/bitcoin/bitcoin.git
cd bitcoin
docker run --rm -v $(pwd):/work --user "$(id -u):$(id -g)" -it android-bitcoin /bin/bash
```

Once you are in the container run the following commands:

```
cd /work
make -C depends
./autogen.sh
./configure --host=${HOST} --prefix=/work/depends/${HOST} \
  --disable-bench \
  --disable-gui-tests \
  --disable-tests \
  --disable-wallet
make -j 8
make -C src/qt apk
```

The resulting APKs will be stored as:

```
src/qt/android/build/outputs/apk/release/android-release-unsigned.apk
src/qt/android/build/outputs/apk/debug/android-debug.apk
```

And here it is! Bitcoin Core with Qt GUI synchronizing on my [CalyxOS](https://calyxos.org) Android phone:

![bitcoin-qt-android](/assets/bitcoin-qt-android.png)
