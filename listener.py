import socket
'''import pymysql
pymysql.install_as_MySQLdb()
import MySQLdb
'''

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
            arr = str(udata).split()
            conn.send(data.upper())
            print(udata)
            push(arr[-7],arr[-6],arr[-5],arr[-4],arr[-3],arr[-2],arr[-1])


        conn.close()
def push(t1,h1,t2,h2,p,w):
    print(t1," ",h1," ",t2," ",h2," ",p," ",w)
    '''db = MySQLdb.connect("localhost", "meteouser", "kwZuq7b3", "meteo")

    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO first (temperature1, humidity1, temperature2, humidity2, pressure, wind_dir) VALUES (t1,h1,t2,h2,p,w)")

    db.close()'''