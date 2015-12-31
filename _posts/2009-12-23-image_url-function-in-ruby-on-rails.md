---
layout: post
title: image_url function in Ruby on Rails
---

If you need to get the full URL of an image, just put the following code snippet into `ApplicationHelper` module in your `app/helpers/application_helper.rb`:

{% highlight ruby %}
def image_url(source)
  abs_path = image_path(source)
  unless abs_path =~ /^http/
    abs_path = "#{request.protocol}#{request.host_with_port}#{abs_path}"
  end
 abs_path
end
{% endhighlight %}

I wonder why this function is not already a standard part of Rails.

([Idea](http://groups.google.com/group/rubyonrails-talk/browse_thread/thread/ab495ed6596afe21) by [Rob Biedenharn](http://biedenharn.us/))
