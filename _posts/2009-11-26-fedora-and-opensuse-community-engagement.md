---
layout: post
title: Fedora and openSUSE Community Engagement
---

The middle of November was very exciting for both [Fedora](http://fedoraproject.org/) and [openSUSE](http://opensuse.org/) communities. At first, openSUSE project unleashed its 11.2 release, which was followed by Fedora 12 a few days after. I thought it would be interesting to dig into bug reports which were filed during the development of these two releases in [respective](http://bugzilla.novell.com/) [bugzillas](http://bugzilla.redhat.com/).

I'm not going to compare the absolute number of bugs, nor the ratio of reported/closed ones, because I think these statistics are easy to find. Also, Fedora 12 development took 6 months, while openSUSE 11.2 took 11 months and this is not very comparable. What I was interested in was how much work happens inside the companies and how much outside their walls, in the community. Please, bear in mind that development is not only about reporting, closing bugs and their count. A lot also happens on wikis, [openFATE](https://features.opensuse.org/) or other tools, so these statistics could be a little bit skewed. Enough talking, here comes the data and charts ...


{% highlight ini %}
                    +----------+-------------+-----------+-------------+
                    |     openSUSE 11.2      |        Fedora 12        |
                    +----------+-------------+-----------+-------------+
                    |  Novell  |  community  |  Red Hat  |  community  |
+-------------------+----------+-------------+-----------+-------------+
| bugs reported by  |   1739   |     3915    |    1483   |     4305    |
| unique reporters  |    207   |      957    |     279   |     1663    |
| bugs assigned* to |   5537   |      117    |    4143   |     1645    |
| unique assignees* |    237   |       54    |     226   |      231    |
+-------------------+----------+-------------+-----------+-------------+

* - assignee could be mailing list, it does not have to be an individual
{% endhighlight %}

![community-charts1](/assets/community-charts1.png)

Chart 1: Bugs reported by

![community-charts3](/assets/community-charts3.png)

Chart 2: Unique reporters

When we look at the reporters charts, we see that they are quite similar. This is good!

![community-charts2](/assets/community-charts2.png)

Chart 3: Bugs assigned to

![community-charts4](/assets/community-charts4.png)

Chart 4: Unique assignees

The next two charts are where we can see drastic differences. What are the reasons for this? Well, I was able to come up with these:

* like mentioned above, openSUSE project utilizes other tools, e.g. openFATE, to steer development
* openSUSE is younger project than Fedora, so the community involvement is lower (sometimes it is still very hard for externals to understand WHAT and HOW should be achieved)
* Novell folks do not reassign bugs to community members, even if the problem is fixed via Build Service submit request, the bug stays assigned to 'insider' who closes it
* some of the assignees are in fact mailing lists that contain both internal and external people, but they belong to novell.com domain
* Fedora uses bugzilla for package reviews, these often include external people but are not actual bug reports

Can you think of any more reasons? What can we do to improve the situation and to engage openSUSE community more?
