---
date: 2023-05-03 
title: "Linux Commands: The Obscure Ones"
categories: linux
tags: sysadmin commands
---

# {{ page.title }}

<div style="text-align: right;">{{ page.date | date: '%B %d, %Y' }}</div>

---

## sudo !!

Damn I forgot to use sudo (maybe I should just log in as root?).\
No! Just use this bad boy.

```shell
fontora@banshee:~$ systemctl daemon-reload
==== AUTHENTICATING FOR org.freedesktop.systemd1.reload-daemon ===
Authentication is required to reload the systemd state.
Authenticating as: fontora
Password:

fontora@banshee:~$ sudo !!
sudo systemctl daemon-reload
```

## mtr

My Traceroute .. it's like traceroute but better.

```shell
fontora@banshee:~$ mtr google.com
                                    My traceroute  [v0.95]
banshee (129.24.56.77) -> google.com (172.217.24.46)              2023-05-03T13:06:06+1000
Keys:  Help   Display mode   Restart statistics   Order of fields   quit
                                                      Packets               Pings
 Host                                             Loss%   Snt   Last   Avg  Best  Wrst StDev
 1. ns1rtr1-ten-lan.binarylane.cloud              6.2%    16    0.3   0.3   0.2   0.4   0.0
 2. 74.125.52.4                                   0.0%    16    0.6   1.2   0.4   7.0   1.8
 3. 108.170.247.81                                0.0%    16    1.0   1.0   0.8   2.1   0.3
 4. 216.239.57.119                                0.0%    15    1.3   1.2   1.1   1.3   0.1
 5. syd15s20-in-f14.1e100.net                     0.0%    15    0.8   0.7   0.7   0.9   0.1
```

## namei

Intended for troubleshooting symlink hell, can be useful to troubleshoot permissions.

```shell
fontora@banshee:~$ namei -l /etc/ssh/sshd_config
f: /etc/ssh/sshd_config
drwxr-xr-x root root /
drwxr-xr-x root root etc
drwxr-xr-x root root ssh
-rw-r--r-- root root sshd_config
```

## stat

ls -l is for chumps.

```shell
fontora@banshee:~$ stat /etc/ssh/sshd_config
  File: /etc/ssh/sshd_config
  Size: 3256            Blocks: 8          IO Block: 4096   regular file
Device: fc01h/64513d    Inode: 791         Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2023-04-29 18:42:33.932000000 +1000
Modify: 2022-07-22 12:28:12.779931939 +1000
Change: 2022-07-22 12:28:12.779931939 +1000
 Birth: 2022-07-22 12:28:12.779931939 +1000
```

## pstree vs ps

Do you like ***pstree***? Meh.\
Do you like ***ps***? Correct!

```shell
fontora@banshee:~# ps -eF f
```

Bonus points if you do something like ***ps --ppid 2 -NF f***

## man ascii

Pretty useful.

```shell
fontora@banshee:~$ man ascii
...
       Oct   Dec   Hex   Char                        Oct   Dec   Hex   Char
       ────────────────────────────────────────────────────────────────────────
       000   0     00    NUL '\0' (null character)   100   64    40    @
       001   1     01    SOH (start of heading)      101   65    41    A
       002   2     02    STX (start of text)         102   66    42    B
       003   3     03    ETX (end of text)           103   67    43    C
       004   4     04    EOT (end of transmission)   104   68    44    D
       005   5     05    ENQ (enquiry)               105   69    45    E
       006   6     06    ACK (acknowledge)           106   70    46    F
       007   7     07    BEL '\a' (bell)             107   71    47    G
       010   8     08    BS  '\b' (backspace)        110   72    48    H
       011   9     09    HT  '\t' (horizontal tab)   111   73    49    I
       012   10    0A    LF  '\n' (new line)         112   74    4A    J
       013   11    0B    VT  '\v' (vertical tab)     113   75    4B    K
       014   12    0C    FF  '\f' (form feed)        114   76    4C    L
       015   13    0D    CR  '\r' (carriage ret)     115   77    4D    M
...
```

## vmstat

Another tool for checking performance (use htop if you're not btw).\
Dummies guide: If the second last column (CPU wait) is never not zero, it's bad.

```shell
fontora@banshee:~$ vmstat 5 5
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0      0 113484  63620 588460    0    0     4     7   24   43  0  0 100  0  0
 0  0      0 113484  63624 588460    0    0     0    33   36   56  0  0 99   0  0
 1  0      0 113484  63624 588464    0    0     1     0   42   81  1  0 99   0  0
 0  0      0 113484  63632 588464    0    0     0     8   32   54  0  0 100  0  0
 0  0      0 113484  63632 588464    0    0     0     0   24   40  0  0 100  0  0
```

## vimdiff

It's like diff... but better in every way.

```shell
fontora@banshee:~$ vimdiff /etc/ca-certificates.conf /etc/ca-certificates.conf.dpkg-old
```

![vimdiff](/public/images/2023-05-03-vimdiff.png)
