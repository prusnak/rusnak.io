#!/bin/sh
grep '](/assets/.*)' *.md | tr '()' '\n\n' | grep ^/assets/ | sed 's:^/assets/::'
