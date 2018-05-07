#!/usr/bin/env python
# -*- coding: utf-8 -*-

import socket

sock = socket.socket()
sock.connect(('s3.skop.in.ua', 9090))
sock.send(b'hello, world!')

data = sock.recv(1024)
sock.close()

print (data)