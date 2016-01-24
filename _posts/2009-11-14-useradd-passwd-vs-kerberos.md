---
layout: post
title: useradd and passwd vs. Kerberos
---

![kerberos](/assets/kerberos.png)

At work we use [LDAP](http://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) and [Kerberos](http://en.wikipedia.org/wiki/Kerberos_(protocol)) authentication for users. During the testing of [openSUSE 11.2](http://en.opensuse.org/OpenSUSE_11.2), me and my other two colleagues ([mmarek](http://en.opensuse.org/User:Michal-m) and mseben) have encountered problem that one cannot change the local password of user added with `useradd`. Running `passwd user` jumps directly to setting krb5 password. This was reported as [bnc#545724](https://bugzilla.novell.com/show_bug.cgi?id=545724).

It turned out that this is caused by the line:

{% highlight bash %}
password  [default=ignore success=1]  pam_succeed_if.so  uid > 999  quiet
{% endhighlight %}

which is added to `/etc/pam.d/common-password-pc` by `pam-config` during the installation, when Kerberos is enabled.

So the question is: How to add local users with local password (e.g. for testing purposes)? You can add so-called system-users by using `useradd -r username` (these will be given UID &lt; 1000 and thus will not be handled by Kerberos). There is a catch, though. You cannot login as this user, because it's shell is set to `/bin/false` by default. You can change it in `/etc/passwd` or, more cleanly, specify the shell immediately when creating the user:

{% highlight bash %}
useradd -r username -s /bin/bash
{% endhighlight %}
