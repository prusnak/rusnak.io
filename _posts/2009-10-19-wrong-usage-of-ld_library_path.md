---
layout: post
title: Wrong usage of LD_LIBRARY_PATH
---

Lots of programs that bring their own libraries use the following snippet in their wrapper scripts:

:::bash
    export LD_LIBRARY_PATH="/my/special/librarypath:$LD_LIBRARY_PATH"

This allows linker to find the needed libraries, even if they are not located in the standard directories (which are defined by `/etc/ld.so.conf`). At first, this seems OK, but it creates one problem, though. When the `$LD_LIBRARY_PATH` was empty before the assignment, the new value ends with a colon. When we run the program wrapper, linker splits the variable into substrings and ends up with one empty path. This indicates to search for libraries in the CURRENT working directory, which can cause problems or even a security threat.

So, what's the correct way of defining the library path? Of course, we could check if the variable is empty before the assignment like this:

:::bash
    if [ -n "$LD_LIBRARY_PATH" ]; then
        export LD_LIBRARY_PATH="/my/special/librarypath:$LD_LIBRARY_PATH"
    else
        export LD_LIBRARY_PATH="/my/special/librarypath"
    fi

but there is one neat shell trick we can use (should work on all POSIX shells). The description says:
> "`${parameter:+word}`
Use Alternate Value.  If `parameter` is null or unset, nothing is substituted, otherwise the expansion of `word` is substituted."

In the end we have:

:::bash
    export LD_LIBRARY_PATH="/my/special/librarypath${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"

which is not much longer than the line we started with, but does the assignment correctly. (The first colon belongs to shell syntax, the second one is a part of the value being appended).
