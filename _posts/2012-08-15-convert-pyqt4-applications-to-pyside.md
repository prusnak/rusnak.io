---
layout: post
title: Convert PyQt4 Applications to PySide
---

!(/content/pysidelogo.png)

I just noticed (little bit late, but better later than never :-)) that [PySide](http://pyside.org/) has [become](http://www.pyside.org/2012/03/pyside-becomes-a-qt-add-on/) an official part of the [Qt Project](http://qt-project.org/).

Thus I decided to rewrite all my PyQt4 applications to PySide. There are couple of options how to make your code to work with both PyQt4 and PySide, but in my opinion this adds a lot of cruft to the source code and there's no reason to stay with PyQt4 so most of the systems will migrate to PySide in the near future. If you want to learn about these options anyway, consult the [Supporting Both APIs](http://qt-project.org/wiki/Differences_Between_PySide_and_PyQt#0e8e37084768b11e2d2c954a46594e12) section of the [Differences Between PySide and PyQt](http://qt-project.org/wiki/Differences_Between_PySide_and_PyQt) at Qt wiki.

This document has also been a very helpful source of information for my simple script that converts your code from PyQt4 API to PySide. Please note that it's not a 100% fully automated conversion, just a bunch of simple replacements and a scanner for problematic API usage like using QString, QVariant or the return value of QFileDialog methods. I am releasing it because I still do think it's quite helpful and covers most of the cases.

Grab the source [on github](https://github.com/prusnak/misc/tree/master/pysider) and of course you are welcome to send your patches/pull requests. :-)
