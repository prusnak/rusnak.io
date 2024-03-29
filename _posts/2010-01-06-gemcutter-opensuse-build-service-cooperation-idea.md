---
layout: post
title: Gemcutter + openSUSE Build Service cooperation (idea)
---

If you are closely following [Ruby](http://www.ruby-lang.org/) development and especially the situation around ruby gems, you might already know of [Gemcutter](http://gemcutter.org/). It is a new service, which provides a very easy way how to publish gems and also a good [API](http://gemcutter.org/pages/api_docs) to deal with them. It is not trying to replace [RubyForge](http://rubyforge.org/) as whole, just its gem hosting (+ now defunct [GitHub gem hosting](http://gems.github.com/)) and will soon become the central and the only place for Ruby gems. The whole site is [MIT licensed](http://www.opensource.org/licenses/mit-license.php) and the code is available on [GitHub](http://github.com/qrush/gemcutter).

![gemcutter](/assets/gemcutter.png)

During the winter holidays I wrote a [simple script](http://gitorious.org/opensuse/misc/blobs/master/buildservice-gemcutter-versions) which utilizes the [Gemcutter](http://gemcutter.org/) API and prints versions of `rubygem-*` packages in our `devel:languages:ruby:extensions` [Build Service](http://en.opensuse.org/Build_Service) repository compared with the corresponding gem versions on Gemcutter. Using this script and a great [gem2rpm](http://rubyforge.org/projects/gem2rpm/) (more particularly `gem2rpm-opensuse` command which applies openSUSE template and is available from `rubygem-gem2rpm` package), I was able to update nearly a hundred of gems in just two hours. [Rails](http://rubyonrails.org/) rubygems have a specific packaging in openSUSE, so I left them out, but more than 90% of the rest didn't need any changes in autogenerated spec file.

This brought me an idea. If only [Gemcutter](http://gemcutter.org/) had an option to somehow send out notification that a new gem has been pushed, we could automate the process and have up-to-date rubygems in our `devel:languages:ruby:extensions` repository almost instantly. (We would still need to keep the list of "dirty" rubygems that need to be updated manually, though. For example, [Rails](http://rubyonrails.org/) packages I mentioned earlier, where we keep multiple versions, or others where we need to add a patch replacing `/usr/local/bin/ruby` with `/usr/bin/ruby` in scripts).

Few days later, [Gemcutter](http://gemcutter.org/) gained RSS feed support, but only for the gems one is interested in. I didn't find the option to have RSS feed for all gems. This could have helped in creating such mechanism, but that won't be needed anymore because ...

... yesterday [Nick Quaranto](http://twitter.com/qrush) of [Gemcutter](http://gemcutter.org/) announced [webhook support](http://gemcutter.org/pages/gem_docs#webhook). I'm really excited, because that's exactly what we need! When one registers a webhook, [Gemcutter](http://gemcutter.org/) emits a POST request on a certain URL when a gem is pushed or updated. This request is a JSON document containing the info about gem. What we need is to create a mechanism that:

* receives notification via POST JSON request
* checks whether the package is not "dirty" -> exit if it is (and probably send some email ...)
* fetches the package from the [Build Service](http://en.opensuse.org/Build_Service) or create a new one
* fetches the new gem, removes the old one
* runs `gem2rpm-opensuse` to create a spec file replacing the old one
* adds changelog entry
* pushes the updated package back into the [Build Service](http://en.opensuse.org/Build_Service)

Last but not least: If [Fedora](http://fedoraproject.org/) and [Mandriva](http://mandriva.com/) had [gem2rpm](http://rubyforge.org/projects/gem2rpm/) templates in a perfect shape too, [Build Service](http://en.opensuse.org/Build_Service) could provide packaged gems also for their distributions.

So what do you think? Any volunteers for this? Right now, I'm off to fix some small bugs I found in [gem2rpm](http://rubyforge.org/projects/gem2rpm/) while fiddling with it ... :-)
