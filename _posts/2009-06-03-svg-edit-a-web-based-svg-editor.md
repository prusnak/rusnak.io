---
layout: post
title: SVG-edit, a web based SVG editor
---

Last weekend I was looking for a nice in-browser SVG editor. I found some alternatives, but no one was close to my ideals. :-) Most feature complete was [SVG editor](http://www.resource-solutions.de/svgeditor/) by Chris Peto, but it has complicated interface based on CGUI and is also pretty heavy.

Then I stumbled upon [svg-edit](http://code.google.com/p/svg-edit/) by Narendra Sisodiya. It was rather raw and lots of features were missing, but then I sat down, started hacking and after few hours I created quite a long list of changes. When I sent them to Narendra, he was so kind that he made me an administrator of the project, so I was able to push all my changes into SVN trunk and to continue the work there.

Today I finished all changes I wanted to fix before the relase, so I can present you the 2.0 release of SVG-edit! You can [try for yourself](http://svg-edit.googlecode.cddom/svn/trunk/editor/svg-editor.html) - this points to trunk development version, so it might get messy in time :)

![svg-edit](/assets/svg-edit.png)

During the development I was testing it in Firefox and Opera and I'm sure there will be some problems in other browsers. If you hit any, do not hesitate and write me an e-mail or even better use the issue tracker on the [project site](http://svg-edit.googlecode.com/).

Also there are some features that are still missing, but they are planned (like adding text, more complicated shapes or selecting, moving, scaling, rotating objects) and I hope they will be added in the near future.
