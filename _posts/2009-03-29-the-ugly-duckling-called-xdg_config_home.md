---
layout: post
title: The Ugly Duckling called $XDG_CONFIG_HOME
---

Let's take a look into my home directory:

<pre>
[stick@spectra 0 ~] ls -F
Applications/  Documents/  google.txt    reverse-ssh*
Desktop/       Downloads/  public_html/  work/

[stick@spectra 0 ~] ls -AF
.0verkill             google.txt              public_html/
.adobe/               .grails/                .pulse/
.android/             .gstreamer-0.10/        .pulse-cookie
Applications/         .gtk-bookmarks          .pyhistory
.AtomicWorm/          .gtkrc-2.0-kde4         .qt/
.bash_history         .gvfs/                  .rawstudio/
.bashrc               .hplip/                 .recently-used
.bouml                .htoprc                 .recently-used.xbel
.boumlrc              .hugin                  .repoconfig/
.bzr.log              .icedteaplugin/         reverse-ssh*
.cache/               .inkscape/              .rnd
.cddb/                .inputrc                .rpmpatch_macros
.cedega/              .IntelliJIdea80/        .rpmpatch_rpmrc
.civclientrc          .IntelliJIdea8x/        .scummvmrc
.civserver_history    .irssi/                 .signature-gk2
.config/              .java/                  .signature-gmail
.crack-attack/        .JxBrowser/             .signature-suse
.cxgames/             .kde/                   .skel/
.darkplaces/          .kde4/                  .Skype/
.dbus/                .kderc                  .smc/
.designer/            .kinorc                 .springrc
Desktop/              .ktorrent.lock          .sqlite_history
.directory            .lbrc.conf              .ssh/
.dmrc                 .lesshst                .strigi/
Documents/            .links/                 .subversion/
Downloads/            .liquidwarrc            .teeworlds/
.dvdcss/              .local/                 .thumbnails/
.eclipse/             .loki/                  .thunderbird/
.emacs                .macromedia/            .ufrawrc
.esd_auth             .mc/                    .ultramixer/
.fbhighlevelshistory  .mcop/                  .vendetta/
.fbhighscores         .miro/                  .viminfo
.fblevels/            .mixxxbpmscheme.xml     .vimrc
.fbrc                 .mixxx.cfg              .VirtualBox/
.fontconfig/          .mixxxmacros/           .vlc/
.fonts/               .MixxxMIDIBindings.xml  .vnc/
.fonts.conf           .mixxxtrack.xml         .w3m/
.gajim/               .mozilla/               .Wammu
.gconf/               .mplayer/               .wapi/
.gconfd/              .mysql_history          .windows-label
.gegl-0.0/            .mysticmine             .wine/
.gem/                 .netxrc                 .winetrickscache/
.gimp-2.6/            .nexuiz/                work/
.gitconfig            .ooo3/                  .Xauthority
.gnome/               .opera/                 .xim.template
.gnome2/              .osc_cookiejar          .xine/
.gnome2_private/      .oscrc                  .xsession-errors
.gnupg/               .profile                .y2usersettings
.google/              .psi/
.googleearth/         .psql_history
</pre>

Out of 148 entries in my $HOME, there are only 12 of them I really want to see! How much nicer would it be, if it looked like this:

    [stick@spectra 0 ~] ls -AF
    Applications/  Documents/  public_html/    .signature-gmail
    .config/       Downloads/  reverse-ssh*    .signature-suse
    Desktop/       google.txt  .signature-gk2  work/

This is very simple to achieve, if only applications followed the [XDG Base Directory Specification](http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html). Unfortunately, lots of them don't. When you start using the following piece of code in your new awesome applications:

~~~cpp
config = getenv("XDG_CONFIG_HOME")
if (!config) config = getenv("HOME") + "/.config"
config = config + "/my_awesome_app"
~~~

instead of the old-school one:

~~~cpp
config = getenv("HOME") + "/.my_awesome_app"
~~~

users will gain two great advantages with nearly no extra effort:

* trying application without overwriting the existing configuration `XDG_CONFIG_HOME=/tmp/ my_awesome_app`
* maintaining multiple configurations of the same application `XDG_CONFIG_HOME=~/.config/awesome3 my_awesome_app`

So, please, don't ignore the ugly duckling called `$XDG_CONFIG_HOME`, I'm sure it will mature into a beautiful swan. :)
