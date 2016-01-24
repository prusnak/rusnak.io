#!/bin/sh
grep '](/assets/.*)' _posts/*.md *.md | tr '()' '\n\n' | grep ^/assets/ | sed 's:^/assets/::'
