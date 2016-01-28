#!/bin/sh
grep '](/assets/.*)' _posts/*.md *.md | tr '()' '\n\n' | grep ^/assets/ | while read f; do
	if [ -r ".$f" ]; then
		echo -e "$f ... \033[0;32mOK\033[0m"
	else
		echo -e "$f ... \033[0;31mmissing\033[0m"
	fi
done
