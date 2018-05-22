import socket
import MySQLdb


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
            res = []
            for i in arr:
                if v:
                    res.append(i)
                if i == "Value:":
                    v = True
            push(res[0],res[1],res[2],res[3],res[5],0)



        conn.close()

def push(t1, h1, t2, h2, p, w):
    conn = MySQLdb.connect('localhost', 'username', 'password', 'table_name')
    cursor = conn.cursor()

    cursor.execute("INSERT INTO table_name(temperature1, humidity1, temperature2, humidity2, pressure, wind_dir) VALUES(t1, h1, t2, h2, p, w);")

    conn.close()