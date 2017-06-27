---
layout: page
title: Jller
---

*Art collaboration with Prokop Bartonicek and Tomislav Arnaudov as [pebe/lab](/pebe-lab) and Benjamin Maus of [FELD](http://www.feld.is/) (2015)*

web: [http://www.pebe.cz/lab/?p=3820](http://www.pebe.cz/lab/?p=3820), [http://www.feld.is/projects/jller/](http://www.feld.is/projects/jller/)

<iframe src="https://player.vimeo.com/video/167126696?title=0&byline=0&portrait=0" width="720" height="405" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Jller is part of an ongoing research project in the fields of industrial automation and historical geology. It is an apparatus, that sorts pebbles from a specific river by their geologic age. The stones were taken from the stream bed of the German river Jller, shortly before it merges with the Danube, close to the city of Ulm. The machine and its performance is the first manifestation of this research.

{% for i in (1..4) %}
![jller{{ i }}](/assets/jller{{ i }}.jpg)
{% endfor %}

A set of pebbles from the Jller are placed on the 2x4 meter platform of the machine, which automatically analyzes the stones in order to then sort them. The sorting process happens in two steps: Intermediate, pre-sorted patterns are formed first, to make space for the final, ordered alignment of stones, defined by type and age. Starting from an arbitrary set of stones, this process renders the inherent history of the river visible.

The history, origin and path from each stone found in a river is specific to the location, as every river has a different composition of rock types. The origin of those stones is well documented. For instance, the ones from the river Jller derive from two origins. Some come from rocks, that are the result of erosions in the Alps and are carried in from smaller rivers. Other stones have been ground and transported by glaciers that either still exist, or existed in the ice ages. As the Alps and flats, that were once covered by glaciers, have shifted, even deeper rock-layers were moved and as a result, stones from many geologic periods make their way into a river. When the history of a river is known, the type of stone can be directly related to its geological age.

The machine works with a computer vision system that processes the images of the stones and maps each of its location on the platform throughout the ordering process. The information extracted from each stone are dominant color, color composition, and histograms of structural features such as lines, layers, patterns, grain, and surface texture. This data is used to assign the stones into predefined categories. Those categories represent the range of stones that can be found in the specific river and correspond directly to the age of the stone. They are the result of a classification system that is trained by sets of manually selected and labeled stones. Because there are only a limited number of stone types that can be found in a specific river, this system proves to be very accurate.

In the media:

* [Collosal](http://www.thisiscolossal.com/2016/05/kinetic-rock-sorting-jller/)
* [Wired](http://www.wired.com/2016/05/someone-built-rock-sorting-robot-downright-hypnotizing/)
* [Popular Science](http://www.popsci.com/rock-sorting-art-machine-is-useless-and-beautiful)
* [Atlas Obscura](http://www.atlasobscura.com/articles/watch-a-hypnotizing-machine-sort-river-rocks-by-age)
