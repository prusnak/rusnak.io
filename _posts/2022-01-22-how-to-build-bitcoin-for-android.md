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

And here it is!

Bitcoin Core with Qt GUI synchronizing on my [CalyxOS](https://calyxos.org) Android phone:

![bitcoin-qt-android](/assets/bitcoin-qt-android.png)

If you want to change the target SDK version or switch from Testnet to Mainnet,
just edit the `src/qt/android/AndroidManifest.xml` file:

``` patch
diff --git a/src/qt/android/AndroidManifest.xml b/src/qt/android/AndroidManifest.xml
index 41615294e..fdbc1385e 100644
--- a/src/qt/android/AndroidManifest.xml
+++ b/src/qt/android/AndroidManifest.xml
@@ -1,6 +1,6 @@
 <?xml version='1.0' encoding='utf-8'?>
 <manifest package="org.bitcoincore.qt" xmlns:android="http://schemas.android.com/apk/res/android" android:versionName="1.0" android:versionCode="1" android:installLocation="auto">
-    <uses-sdk android:targetSdkVersion="24"/>
+    <uses-sdk android:targetSdkVersion="28"/>
 
     <uses-permission android:name="android.permission.INTERNET" />
     <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
@@ -22,7 +22,7 @@
                 <category android:name="android.intent.category.LAUNCHER"/>
             </intent-filter>
 
-            <meta-data android:name="android.app.arguments" android:value="-testnet"/>
+            <meta-data android:name="android.app.arguments" android:value=""/>
             <meta-data android:name="android.app.lib_name" android:value="bitcoin-qt"/>
             <meta-data android:name="android.app.repository" android:value="default"/>
             <meta-data android:name="android.app.bundle_local_qt_libs" android:value="1"/>
```
