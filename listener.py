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
            v = False
            for i in arr:
                if v:
                    print(i)
                if i == "Value:":
                    v = True
            l = len(arr)
            print(arr[10])
            print(arr[9])

        conn.close()