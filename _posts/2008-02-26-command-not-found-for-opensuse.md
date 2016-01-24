---
layout: post
title: command-not-found for openSUSE
---

During Hackweek I implemented project [command-not-found for openSUSE](http://idea.opensuse.org/content/ideas/command-not-found-for-opensuse).

Background: Debian and Ubuntu use patched bash, that allows to write handler, which is executed before "command not found" is written. That provides us a way we can help user in solving the problem. You can look at the picture to get the idea:

{% img center /content/cnf.png %}

In first example, user types "epihpany" instead of "epiphany" and handler suggests correct spelling. After this user tries running epiphany, but it is not installed, so handler shows list of packages that provide this program. In the third example, user runs program that is not found, but package providing it is installed (meaning that program is not in user's path - probably intended to be run only by root).

Package command-not-found and patched bash are available in [BuildService](https://build.opensuse.org/project/show?project=home:prusnak:command-not-found) or you can download packages directly from [repository](http://download.opensuse.org/repositories/home:/prusnak:/command-not-found/). Please test the packages and let me know if you have any ideas or in case you have found a bug.

Ah, I almost forgot :) You have to add these 3 lines to `/etc/bash.bashrc.local` or `~/.bashrc`:

{% highlight bash %}
if [ -f /etc/bash_command_not_found ]; then
  . /etc/bash_command_not_found
fi
%{ endhighlight %}

Handler for `zsh` can be installed in similar fashion. Read `README` in `command-not-found` package.
