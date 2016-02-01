---
layout: post
title: Change in command-not-found handler default behaviour
---

Due to some requests on mailing lists and Feature [#305803](https://features.opensuse.org/305803) I decided to change the default behavior of command-not-found handler (in openSUSE 11.2 and SLE11).

Now it prints this info immediately:

~~~
$ blender
If 'blender' is not a typo you can use command-not-found to lookup the package
that contains it, like this:
    command-not-found blender
bash: blender: command not found

$ ifconfig
Absolute path to 'ifconfig' is '/sbin/ifconfig', so running it may require
superuser privileges (eg. root).
bash: ifconfig: command not found
~~~

instead of directly performing the search.

If you want the old behaviour back (i.e. search invoked automatically), just add
`export COMMAND_NOT_FOUND_AUTO=1`
to your bash profile. (This is also documented in command-not-found man page).

You can install the updated packages from [home:prusnak:scout](http://download.opensuse.org/repositories/home:/prusnak:/scout/) BuildService repository as usual.
