import socket

def main():
    sock = socket.socket()
    sock.bind(('', 9090))
    sock.listen(1)
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
            arr = str(udata).split()
            print(arr[-7]," ",arr[-6]," ",arr[-5]," ",arr[-4]," ",arr[-3]," ",arr[-2]," ",arr[-1]," ",)

        conn.close()