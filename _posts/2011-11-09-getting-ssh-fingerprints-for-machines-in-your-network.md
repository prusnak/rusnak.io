---
layout: post
title: Getting SSH fingerprints for machines in your network
---

Some time ago we were trying to get SSH fingerprints for all machines in our local network. Solution is not that straightforward, but it's not a rocket science either:

~~~bash
#!/bin/bash
tmpfile=$(mktemp)
for i in $(seq 2 254); do
    ssh-keyscan -t rsa,dsa,ecdsa 192.168.1.$i >> $tmpfile
done
ssh-keygen -l -f $tmpfile
rm -f $tmpfile
~~~

First, we retrieve the keys using `ssh-keyscan`, store them into temporary file and compute fingerprints afterwards using `ssh-keygen`. Or is there a less complex and more elegant solution?

PS: Thanks [David](http://administratosphere.wordpress.com/2011/05/28/getting-and-verifying-ssh-fingerprints/) for kicking in the right direction.
