---
layout: post
title: Handling requests directly in the Build Service web client
---

We had a listing of pending requests in the Build Service for a while. Unfortunately, it was mashed together with "My Projects" view and one couldn't do anything with them. Few days ago, Jan Loeser added support for handling these requests directly in the web client. I liked the idea, so I decided to spend some time on it, too. I moved the request listing to a separate page and added some nifty [Tango icons](http://tango.freedesktop.org/) for the actions, so they wouldn't take too much of the precious space. Also, the design doesn't use tables-in-table anymore. You can view the result on the following image or directly in the [Build Service](https://build.opensuse.org/).

{% img center /content/listreq.png %}

PS: The page still looks like it was designed by programmers, but as usual you are welcome to help us! :-)
