---
layout: post
title: Prezi Offline in Linux
---

For creating my [GameStore](http://prezi.com/aoojwi_3tlzn/) talk at [LinuxWochen Wien](http://linuxwochen.at) I decided to use new and hip tool called [Prezi](http://prezi.com).  I'm not going to write about its features, you have to try and see for yourself. :-) What I can say is that I really like the tool, but it has one big disadvantage - it's written in Flash.

During the event we had a wireless connection available, but it was rather unreliable, so it was no option for me to present the talk online. I started to investigate the offline options. Either you can download the full blown Prezi Desktop, which is available if you subscribe the service, or you just download the Prezi "Player". But wait, the page claims it is compatible only with Windows and Mac OS X. Let's see. I downloaded the ZIP archive and indeed - it contains data folder with your presentation, Windows application (`prezi.exe`) and Mac OS X application (`prezi.app`).

Let's get hacking! Mac OS X application is in fact just a directory structure. I copied the file `prezi.app/Contents/Resources/movie.swf` to the same location as my `data` directory and tried to run `flashplayer movie.swf`. Wow! The presentation started to load, but unfortunately it stopped after few seconds and I ended with this:

![prezi1](/assets/prezi1.png)

I tried `strace`ing the process, but found nothing unusual (like failed `open` calls). Then I downloaded the debug version of Flash Player, run the command again and got this exception:

~~~actionscript
An ActionScript error has occurred:
Error #2044: Unhandled SecurityErrorEvent:. text=Error #2140: Security sandbox violation:
file:///.../movie.swf/[[DYNAMIC]]/1 cannot load file:///.../data/fonts/LiberationSerif-Regular.swf.
Local-with-filesystem and local-with-networking SWF files cannot load each other.
~~~

Aha! Locally stored SWF files cannot load other SWF files, neither local ones, nor remote ones. That's the problem.  Ok, let's change the standalone player settings. But how?! I tried various command line switch with no success. After couple minutes of searching I found that standalone Flash Player settings could be changed via Flash plugin that loads Settings manager from the Internet? WTF?! :-)

I will make it easier for you: let's google for "flash global security settings content creators". The first result at the time of writing this article was [this one](http://macromedia.com/support/documentation/en/flashplayer/help/settings_manager04a.html). Go to this URL, wait until the Settings manager is loaded and then click on the "Edit locations ..." button.

![prezi2](/assets/prezi2.png)

After that select "Add directory" and choose local directory where you store your presentations. From now on you enabled standalone Flash player to run your Prezis. Congratulations!

Even though I like Prezi, I would be ecstatic if they dropped Flash and used SVG instead as its presentation and interchange format, probably using the uber-cool [SVG-edit](https://github.com/SVG-Edit/svgedit) as the core. :-) It would also enable iPad users to use the tool. And yes, I know about [JessyInk](https://launchpad.net/jessyink), but that's not exactly what I have on mind ...
