import socket

def main():
    sock = socket.socket()
    sock.bind(('', 9090))
    sock.listen(5)
    while True:

        conn, addr = sock.accept()

        print('connected:', addr)
        while True:
            data = conn.recv(1024)

            if not data:
                break

            udata = data.decode("utf-8")
            conn.send(data.upper())
            print(udata)
            
        conn.close()