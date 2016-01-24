---
layout: post
title: Adding YaST menuitem to GNOME 3 status menu
---

**This blogpost is now obsolete.**

**Please go to [GNOME-Shell Extension: YaST (item in) Status Menu](/gnome-shell-extension-yast-status-menu/).**

I read a [blogpost](http://lizards.opensuse.org/2011/04/30/mockup-gnome3-and-yast/) from Nelson Marques about adding YaST modules icon to GNOME Shell. I kind of liked the idea of YaST integration into GNOME Shell, but I had to share Julian Aloofi's worries in comments. He came up with a simple idea to just add the YaST menuitem to status menu in the top-right corner. This was very easy to implement because most of the GNOME Shell features are written in Javascript. I created the following [simple hack](https://gist.github.com/8d0d7d756e18b8a1da21) and ended up with this:

{% img center /content/gnome3-menu-yast.png %}

If you want to add the YaST menuitem as well, just follow these simple steps (as root):

{% highlight bash %}
cd /
wget https://gist.github.com/raw/8d0d7d756e18b8a1da21/131a6caae2556edaa045f9cc3f13c573e12f2d31/gnome3-statusmenu-yast.patch
patch -p1 &lt; gnome3-statusmenu-yast.patch
rm gnome3-statusmenu-yast.patch
{% endhighlight %}

Now you have to restart GNOME Shell (press Alt+F2 and enter "r" command) and you can enjoy the new menu item. :-) Remember, the changes will be lost next time you reinstall the `gnome-shell` package.

I already contacted [Frederic](http://blog.crozat.net/) and [Vincent](http://www.vuntz.net/journal/) about the patch and they are still looking for the best way how to integrate YaST with the rest of the system, so stay tuned. :-)

PS: [Andy](http://www.wafaa.eu/) found an interesting bug. For him, the item was added but clicking on it did nothing. Solution was found by [Frederic](http://blog.crozat.net/) - just install the missing `gnome-menus-branding-openSUSE` package.
