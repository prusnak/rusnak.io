---
layout: post
title: Parallel command execution with limits
---

Randy_sk asked today on IRC if we had any idea how to run commands in parallel, but he also wanted to limit the number of the concurrent processes. I immediately responded: "use make". I started to shape my idea further until I came to this Makefile:

:::makefile
    tasks := $(shell seq -s ' ' 1 `cat commands.txt | wc -l`)
    
    all: $(tasks)
        @echo Done
    
    %:
        @echo `sed '$@!d' commands.txt`
        @eval `sed '$@!d' commands.txt`

This expects you had the file commands.txt prepared, which contains one command per line. If you want to call the same command over and over again, just replace `commands.txt` with `values.txt` and `eval` with the command you want to run.

Using this approach you can limit both the number of concurrent jobs: `make -j 5` and the maximum load: `make -l 2`

Others ideas were to use the shell with `&amp;` and `wait`, or to use the following one-liner:

:::bash
    while sleep 1; do [ "`ps ax | grep your_cmd | wc -l`" -gt 6 ] || your_cmd &amp;; done

but I really like mine solution the most :D
