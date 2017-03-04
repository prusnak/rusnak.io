---
layout: post
title: Longest TXID prefix collision in Bitcoin
---

As you probably know, transactions in Bitcoin are identified by their SHA256 hashes which are 256 bits long. These identifiers are called transaction ID or TXID.

We were brainstorming a new project at SatoshiLabs and an interesting question popped up. How much can we trim TXIDs before collisions start to appear? Or in another words: can we use just the first 128 bits of the hash instead of the full hash to uniquely identify the transaction? Can we use even less bits?

Let's find out!

Bitcoin Core daemon provides a JSON RPC interface, which you can use to query the blockchain. There are many ways how you can interact with the RPC, but I prefer to use Python, so let's use this as an example. Let's install the required package first:

```
sudo pip install python-bitcoinrpc
```

Next, let's open `~/.bitcoin/bitcoin.conf` file and note the `rpcuser` and `rpcpassword` fields from the file, we'll need it for later.
If you want to access the RPC from different machine, add the following line:

```
rpcallowip=192.168.0.0/255.255.255.0
```

This opens the RPC port for the specified range.

Now, let's create the script `dumptx.py` with the following contents (modify the line containing `RPC_SERVER` to your needs):

```python
#!/usr/bin/python3

from bitcoinrpc.authproxy import AuthServiceProxy

RPC_SERVER = ('bitcoinrpc', 'mysupersecretpassword', '192.168.0.2', 8332) # user, pass, host, port

rpc = AuthServiceProxy('http://%s:%s@%s:%d' % RPC_SERVER)

count = rpc.getblockcount()

first = 0
chunk = 100

for start in range(first, count, chunk):
    end = min(start + chunk, count)
    rng = range(start, end)
    hashes = rpc.batch_([['getblockhash', h] for h in rng])
    blocks = rpc.batch_([['getblock', h] for h in hashes])
    for b in blocks:
        for t in b['tx']:
            print(t)
```

What this script does is that it opens RPC connection to the node and asks for the actual blockheight (index of the newest block).

Then it uses batch API to ask for hashes of individual blocks and contents of these blocks (you can't ask for content of block #17 directly, you need to know its hash first). Once the contents of the block is known, the script just prints out transaction IDs to output and discards the rest.

Running the script produces a 13 GB text file with 201,180,597 lines (each line containing exactly one TXID and a newline).

Now we need to find a longest collision. Finding it is quite easy once we sort the file, because sorting will put collisions next to each other. This means we just go through the file and measure the length of the collision with the previous line.

I wrote another script in Python to perform the task, but it was too slow (I left it running for 20 minutes and then I stopped it).

I decided to rewrite it to C and cheated a little bit (I know that each row is exactly 64 characters + newline, so there's no need to read the file row by row as a text file, but let's read it rather as a 65-byte blocks):

```c
#include <stdio.h>
#include <string.h>

int strsame(const char *s1, const char *s2, int max)
{
    int r = 0;
    while (r <= max) {
        if (*s1 != *s2) return r;
        r++; s1++; s2++;
    }
    return r;
}

int main()
{
    FILE *f = fopen("txlist.sorted", "rb");

    char buf1[65], buf2[65];
    char res1[65], res2[65];

    memset(buf1, 0, sizeof(buf1));
    memset(buf2, 0, sizeof(buf2));

    char *line = buf1;
    char *last = buf2;
    int last_max = 0;

    for (;;) {
        size_t s = fread(line, 65, 1, f);
        if (!s) break;

        int r = strsame(line, last, 64);

        if (r > last_max) {
            last_max = r;
            memcpy(res1, line, 65);
            memcpy(res2, last, 65);
        }

        char *tmp = line;
        line = last;
        last = tmp;
    }

    printf("%.65s%.65s%d\n", res1, res2, last_max);

    fclose(f);

    return 0;
}
```

Running the program (it took just around 45 seconds!) resulted in the following output:

```
40d1fda5ca9a87bde44b4e3e27a5e562b38db90da420c4752c2f35099e2a60c1
40d1fda5ca9a84b6996b2f8c1a9c9abd3e71bb285f3bfa295a532e9eae58c774
13
```

Woohoo! We have the result. The longest collision is 13 hex characters long and you can see it above.

This means 7 bytes (56 bits) are enough to distinguish the transactions by their TXID for now. Much less than I anticipated at the beginning!
