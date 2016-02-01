---
layout: post
title: Make your emails more colorful
---

I use [Mozilla Thunderbird](http://mozillamessaging.com/thunderbird/) as my e-mail client and I prefer plain-text messages over HTML format. When you view a threaded conversation it looks like this:

![img](/assets/tbird-before.png)

I found a [little hack](http://www.mozilla.org/support/thunderbird/tips#app_quotelevels) on Mozilla website which adds different colors for various quote levels in messages. Unfortunately the example is no longer valid for Thunderbird 3, because the default color scheme had changed. I modified the CSS to fit the new look and ended up with this:

![img](/assets/tbird-after.png)

If you like it, just run the following command to create the `userContents.css` file:

~~~bash
mkdir -p ~/.thunderbird/*.default/chrome
touch ~/.thunderbird/*.default/chrome/userContent.css
~~~

and put the following contents there:

~~~css
/* Quote Levels Colors */
/* bar color: #729fcf */
blockquote[type=cite] {
    color: #394f67 !important;
    background-color: #edf3f9 !important;
}
/* bar color: #ad7fa8 */
blockquote[type=cite] blockquote {
    color: #563f54 !important;
    background-color: #f4eff4 !important;
}
/* bar color: #8ae234 */
blockquote[type=cite] blockquote blockquote {
    color: #45711a !important;
    background-color: #f0fbe5 !important;
}
/* bar color: #fcaf3e */
blockquote[type=cite] blockquote blockquote blockquote {
    color: #7e571f !important;
    background-color: #fef5e6 !important;
}
/* bar color: #e9b96e */
blockquote[type=cite] blockquote blockquote blockquote blockquote {
    color: #745c37 !important;
    background-color: #fcf6ec !important;
}
~~~

Don't forget to restart Thunderbird! :-)
