---
layout: post
title: Scout released
---

Hooray! The first public version of Scout was just released. It is a simple tool which allows user to look for (not yet installed) packages using simple queries (e.g. which autoconf macros does the package contain, which Java classes are present inside or what binaries does the package provide). Scout is available in openSUSE BuildService in [home:prusnak:scout](https://build.opensuse.org/project/show?project=home:prusnak:scout) project. If you would like to install and test it, follow these three steps:

1. add the following repositories:

{% highlight bash %}
zypper ar http://download.opensuse.org/repositories/home:/prusnak:/scout/openSUSE_11.0 scout
zypper ar http://download.opensuse.org/repositories/home:/prusnak:/scout/data scout-data
{% endhighlight %}

(change openSUSE_11.0 to your distribution if necessary)

2. install scout:

{% highlight bash %}
zypper in scout
{% endhighlight %}

3. add any of the index data you find attractive (only example - see [scout wiki page](http://en.opensuse.org/Scout) for the whole list)

{% highlight bash %}
zypper in scout-bin-suse110
zypper in scout-java-suse110
{% endhighlight %}

Data package names are in format scout-*module*-*repo*. Indexes for autoconf macros are in *autoconf* packages, *bin* are indexed binaries and *java* are indexed java classes. Repository names are either distributions (*sle10*, *suse101*, *suse102*, *suse103*, *suse110*) or BuildService projects (*jpackage17* for Java:jpackage1.7). Simple, isn't it? :)

(Warning: Java indexes are pretty large - 5MB RPMs and around 30MB when installed.)

When you are ready, run `scout` without parameters to see the help. I think that the usage is pretty straightforward (nevertheless, I will try to create demonstration video soon). You can also try running `scoutcsv` or `scoutxml` - they are only symlinks, but they produce CSV or XML output, instead of table output.

I hope you will like it! :)

-----

The next thing to do is to add support for ZYPP repositories (sat-solver files) in module for binaries, so user could query packages (even in the BuildService repositories) without installing any external index data. When this is done, it would be a piece of cake to replace the earlier implementation of command-not-found with the new one using scout as its backend. Unfortunately, this is not going to happen before the ZYPP bindings for Python (python-zypp) are fixed. (API has changed and it seems that only Ruby bindings are maintained.) I tried to fiddle with it ([bugzilla](http://bugzilla.novell.com/show_bug.cgi?id=391831)), but I'm not a [SWIG](http://www.swig.org/) expert. :(
