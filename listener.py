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
            print(res)
            d =[0,0,0,0,0,0]
            i=0
            for r in res:
                if i != 4:
                    d[i] = r
                    i+=1

            #push(res[0],res[1],res[2],res[3],res[5],res[6])



        conn.close()


def push(temperature1, humidity1, temperature2, humidity2, pressure, wind_dir):
    print(temperature1," ",humidity1," ",temperature2," ",humidity2," ",pressure," ",wind_dir)
    conn = MySQLdb.connect('localhost', 'meteouser', 'kwZuq7b3', 'meteo')
    cursor = conn.cursor()
    date = "INSERT INTO first(temperature1, humidity1, temperature2, humidity2, pressure, wind_dir) VALUES(%s, %s,%s,%s,%s,%s);"
    value = (temperature1, humidity1, temperature2, humidity2, pressure, wind_dir)
    cursor.execute(date,value)
    conn.commit()
    #cursor.close()
    conn.close()