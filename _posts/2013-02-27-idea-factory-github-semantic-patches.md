---
layout: post
title: Idea Factory: Semantic Patches on Github
---

This post is a part of [Idea Factory](/idea-factory/) series.

Two years ago someone sent me quite weird pull request on Github. It took me some time
to realize that the only change was the removal of whitespace at the end of the lines
of all files. Commit message contained a link to some software development company so
the whole effort could be considered as some kind of spam or publicity stunt.

But it sparked an idea!

When I was at [FOSDEM](http://fosdem.org/) I saw a great talk about
[Coccinelle](http://coccinelle.lip6.fr/) which is a tool for semantic patches. These are
similar to normal patches, but they contain something like expressions which are being matched
during applying of the patch. That way they apply the change to usually more places of the
codebase not just one (which is the case when using "normal" patches).
Basically, you want to come up with most generic "rule" that fixes one particular issue,
but it's not triggered at any other time. Some examples how Coccinelle was used in Linux
kernel development are [here](http://coccinelle.lip6.fr/impact_linux.php).

Another quite common example (which I've seen at many, many places while working as a package
maintainer at [SUSE](http://www.suse.com/)) is the wrong usage of [strncpy](http://www.kernel.org/doc/man-pages/online/pages/man3/strncpy.3.html) function.
The last argument has quite different meaning than the one used in [strncat](http://www.kernel.org/doc/man-pages/online/pages/man3/strncat.3.html) function.
It is the maximum length of the **appended** string, not the size of the whole output buffer.
The patch fixing this issue is similar to the following:

{% highlight diff %}
--- source.c
+++ source.c
@@ -34,7 +34,7 @@
   return 0;
 }
 
-strncpy(buf, player, sizeof(buf));
+strncpy(buf, player, sizeof(buf) - sizeof(player) - 1);
 
 if (verbose)
 {
 
{% endhighlight %}

This patch obviously fixes the problem only at one particular place.
Semantic patch that fixes all wrong usages of the function might look like this (but please don't take my words for granted,
I have not tested it):

{% highlight diff %}
@@
identifier dest, src;
@@
 
-strncpy(dest, src, sizeof(dest));
+strncpy(dest, src, sizeof(dest) - sizeof(src) - 1);
 
{% endhighlight %}

So back to the idea:

1. Collect the most common programming mistakes people make.
2. Create semantic patches for fixing them.
3. Write a bot that scans Github for these issues and creates a pull request when necessary.
4. PROFIT!

While writing this post I found [this article](http://www.wired.com/wiredenterprise/2012/12/github-bots/)
which says that bots are generally not welcome on Github. But I think if the pull requests are reviewed
by a person and the fixing rules are beneficial to everyone, then it might really be worth a try!
