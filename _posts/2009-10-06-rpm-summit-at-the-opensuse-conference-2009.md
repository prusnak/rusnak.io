---
layout: post
title: RPM Summit at the openSUSE Conference 2009
---

![osc09](/assets/osc09.png)

I'm sure you all heard about the [openSUSE Conference 2009](http://en.opensuse.org/OpenSUSE_Conf_2009) that took place in September in Nuremberg. Not so many know about the RPM Summit that was a part of the conference during its first two days. Idea to create something like this started at [LinuxTag](http://www.linuxtag.org/) 2009 when [Zonker](http://zonker.opensuse.org/) invited Florian to Nuremberg. One thing lead to another and in the end we managed to get several important people into one room (or to join us via conf call) and we kept them there until all problems with RPM and package management in general were solved. Well, not really, there was a lot to discuss and there still is, but you got the point. :-)

And who were our victims^Wexperts? Here's the list:

* [Michael Schroeder](http://en.opensuse.org/User:Mlschroe), SUSE RPM maintainer (Novell)
* [Florian Festi](http://fedoraproject.org/wiki/User:Ffesti), RPM upstream developer (Red Hat)
* [Panu Matilainen](http://fedoraproject.org/wiki/PanuMatilainen), RPM upstream developer (Red Hat)
* [Klaus Kaempf](http://news.opensuse.org/2008/05/23/people-of-opensuse-klaus-kampf/) and [Stanislav Visnovsky](http://lizards.opensuse.org/author/visnov/), SUSE system management folks (including software management, e.g. [libzypp](http://en.opensuse.org/Libzypp)) (Novell)
* [Seth Vidal](http://fedoraproject.org/wiki/User:Skvidal) and [James Antill](http://james-antill.name/) of the [YUM](http://yum.baseurl.org/) fame (Red Hat)

We were also joined by others interested in RPM development: [Ludwig Nussel](http://www.suse.de/~lnussel/), Olaf Dabrunz and [Jan Engelhardt](http://news.opensuse.org/2009/04/23/people-of-opensuse-jan-engelhardt/). Most of the time we were working through a quite long list of issues we prepared in advance in [the wiki](http://rpm.org/wiki/Problems) and it turned out that there is not much difference in the view on the different topics. I tried to summarize the summit in the following 10 points:

1. **Virtual triggers** Triggers on virtual symbols (provides) do not work at the moment. This is considered a bug (or missing feature) and will be fixed.
2. **File triggers** Panu is working on file triggers feature. This will help packagers to get rid of a large number of scriptlets (e.g. `%post`/`%postun -p /sbin/ldconfig`) in spec files, but he wants to be sure that it doesn't break anything else. File triggers are already used by Mandriva, but Panu wants to implement them in a different fashion. (See [Mandriva wiki](http://wiki.mandriva.com/en/Rpm_filetriggers) for the details about their implementation).
3. **Soft dependencies** [Soft dependencies](http://en.opensuse.org/Software_Management/Dependencies) keywords that are already used by SUSE (Recommends, Suggests, Supplements, Enhances) will be recognized in the future versions of RPM. RPM will not do anything with them except of storing in the database and reporting to higher levels of package management stack. There is an ongoing discussion whether and how to implement soft dependencies in [YUM](http://yum.baseurl.org/) (they are already implemented in the [zypp](http://en.opensuse.org/Libzypp) stack).
4. **Update scriptlets** We agreed to introduce two new scriptlets called %preup and %postup. These will be called when updating the package (%preun, %postun, %pre and %post will not be run in this case). This is a way how to fix the broken uninstall scriptlets and one doesn't have to do the weird `if [ "$1" = "0" ];` stuff in the scriptlets anymore to detect whether the operation is upgrade or uninstall.
5. **Scriptlets arguments** Package scriptlets will get more information (e.g. <abbr title="name, epoch, version, release, architecture">NEVRA</abbr> of the packages) about currently run transaction in environment variables. This will make it easier for scriptlets to handle special situations or to detect more precisely what is happening. (One could for example convert some config files when upgrading from package of version 1.x to 2.x and to leave them intact otherwise).
6. **DeltaRPM** DeltaRPM sources will stay in [gitorious](http://gitorious.org/deltarpm) at the moment. They might appear in RPM upstream [git repository](http://rpm.org/gitweb) later in the future but there is no reasoning for this right now. [Jindrich Novy](http://people.redhat.com/jnovy/) is working on a new diff algorithm, we'll see if it will be merged into DeltaRPM or replace it completely.
7. **New payload format** Currently used format is [CPIO](http://en.wikipedia.org/wiki/Cpio) but it has a filesize limit of 8 GiB. This is not enough when one tries to distribute very large files, for example appliance images, packaged as RPMs. Developers will need to find a way how to enhance CPIO or try another format soon. [TAR](http://en.wikipedia.org/wiki/Tar_(file_format)) is really not an option ...
8. **Tilde in version** The special character tilde (~) will be available for use in version representing a negative version token. This will simplify complicated rules which abuse the version and the release tags. (For example, using foo-2.5.99.2 instead of the foo-2.6~beta2). There already exists [a patch](http://www.rpm.org/ticket/56) but it needs more test coverage.
11. **Logging and recovery**
There is a plan to include a transaction log to RPM which will allow recovery after a broken transaction. RPM log could also replace similar features in YUM/zypper and will be more reliable as it would also work from rpm cli.
10. **Easy way to add or remove autogenerated dependencies** This feature is wanted but is not implemented yet. Currently this is workarounded by redefining the `__find_provides`/`__find_requires`/... in spec file. Example from the open-vm-tools package:

{% highlight bash %}
# exclude AMD PCnet32 LANCE pci.id from Supplements list [bnc#397554]
%define __find_supplements sh -c '/usr/lib/rpm/find-supplements %{name} | grep -v pci:v00001022d00002000'
{% endhighlight %}

That's it! I had a great time during the conference and was really happy to see the synergy between the developers, even though they are working for two competing companies. In case you have any questions feel free to join us on Freenode IRC channel [#rpm.org](irc://irc.freenode.net/rpm.org) or use the appropriate [mailing list](http://lists.rpm.org/).
