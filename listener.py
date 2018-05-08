import socket

def main():
    sock = socket.socket()
    sock.bind(('', 9090))
    sock.listen(1)
    conn, addr = sock.accept()

    print('connected:', addr)
    i = 0
    while True:
        data = conn.recv(1024)
        if not data:
            break
        if i == 100:
            i = 0
            print("some log")
        udata = data.decode("utf-8")
        conn.send(data.upper())
        print(udata)
        i+=1

    conn.close()