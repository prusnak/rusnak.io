---
layout: post
title: Making a delicious coffee cake with openSUSE
---

What we need for our delicious openSUSE coffee cake:

* 300g Eclipse<sup>1</sup>
* 200g IntelliJ Idea<sup>2</sup>
* 150g ground NetBeans<sup>3</sup>
* 1 baking Maven<sup>4</sup>
* 1/2 spoon Groovy<sup>5</sup>
* 1 cup of cold Java<sup>6</sup>
* 3 eggs
* 80g drawn butter
* 100g chocolate icing

<sup>1</sup> flour, <sup>2</sup> sugar, <sup>3</sup> walnuts, <sup>4</sup> powder, <sup>5</sup> cinnamon, <sup>6</sup> coffee

{% img center /content/cooking.jpg %}

Instructions:

1. Mix powdery ingredients in a bowl.
2. Add liquid ones as well and stir around well.
3. Bake in the oven and check regularly.
4. When ready take out the cake and let it cool down.
5. Put chocolate icing on the top and add some openSUSE magic.
6. Enjoy!

{% img center /content/coffee-cake-opensuse.jpg %}

#Oh no, wait!

{% img center /content/notyours1.jpg %}

There are some ingredients missing in our kitchen, ahem, I meant Factory. Currently we only have NetBeans and today I learned from [Michal](http://lizards.opensuse.org/author/mvyskocil/) that it will be probably dropped as well, because some of its parts started to depend on Eclipse.

So my question is: **is there anyone from our great openSUSE community who is willing to help with Java packaging?** We have various related packages (Eclipse, IntelliJ Idea + their dependencies like Groovy or Maven) spread around various places in the Build Service (e.g. [home:lkundrak:IDEA](https://build.opensuse.org/project/show?project=home:lkundrak:IDEA), [Java:eclipse:Devel](https://build.opensuse.org/project/show?project=Java:eclipse:Devel)), but we would like to have them fixed and pushed to our devel project for Factory - Java:packages. This is the first and necessary step for including these tools into you beloved distribution. Some of the packages are probably obsolete so it might be better to get inspiration directly at our Fedora friends (you can use this [package list](http://pkgs.fedoraproject.org/gitweb/) and a little [helper script](http://gitorious.org/opensuse/misc/blobs/master/fedora-getpkg) to peek how do they do it). If you are interested in this, please do so! We will try to help you on [opensuse-java](http://lists.opensuse.org/opensuse-java/) mailing list or #opensuse-java IRC channel on Freenode.

Oh, I almost forgot one thing. The most active Java packager will get an openSUSE coffee cake done by yours truly and the openSUSE Boosters! :-)
