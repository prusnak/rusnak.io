---
layout: post
title: Open Build Service - Introducing Download Page
---

This is something I should've blogged about some time ago, but we wanted to make it a part of a bigger announcement, which did not happen so ... here goes.

One of the ideas how to help with [Open Build Service](http://openbuildservice.org/) adoption was to create some kind of download widget that would be possible to embed into upstream projects' download pages. After a few days of work I ended up with the page that is now available from this URL:

`http://software.opensuse.org/download?project=PROJECT&package=PACKAGE`

It contains instructions for all distributions (like adding repo and installing the package), provides direct link to packages (which I recommend using only as a last resort solution), and for SUSE/openSUSE there are One-Click-Install buttons. The page also automatically preselects your distribution (if it's possible to guess from user agent).

Go to [http://software.opensuse.org/download?project=openSUSE:Tools&package=osc](http://software.opensuse.org/download?project=openSUSE:Tools&package=osc) to see the page in action. You can also embed the page using slightly modified URL into your download page:

~~~html
<iframe src="http://software.opensuse.org/download/iframe?project=openSUSE:Tools&package=osc"></iframe>
~~~

<iframe width="600" height="600" src="http://software.opensuse.org/download/iframe?project=openSUSE:Tools&package=osc"></iframe>

If you want to modify the default color theme just use the following GET attributes (`acolor` - link color, `bcolor` - background color, `fcolor` - foreground color, `hcolor` - headers color). They accept standard HTML color values like 123 or 112233 (without the #).

PS: Some projects (like for example [Geogebra](http://www.geogebra.org/cms/en/installers)) are already using this, although it was not yet properly announced. Feel free to join them if you think it's a good idea!
