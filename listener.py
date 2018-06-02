import socket
import MySQLdb
import Zambretti
import datetime

last_pressure = 1030.0

def main():
    sock = socket.socket()
    sock.bind(('', 9090))
    sock.listen(1)
    while True:

        conn, addr = sock.accept()

        print('connected:', addr)
        while True:
            #try:
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
                d =[0,0,0,0,0,0]
                i=0
                index =0
                for r in res:
                    if index !=4:
                        d[i] = r
                        i += 1
                    index += 1

                check_push(d)

            #except:
            #    print("error")
        conn.close()
def check_push(d =[]):
    global last_pressure
    if d[0] != 0 and d[2] != 0:
        today = datetime.date.today()
        d.append(Zambretti.ZambrettiCode(d[4], today.month, d[5], pressureTrend(last_pressure, float(d[4]))))
        print(d)

        push(d[0], d[1], d[2], d[3], d[4], d[5], d[6])
        last_pressure = d[4]

def push(temperature1, humidity1, temperature2, humidity2, pressure, wind_dir, forecast):

    print(temperature1," ",humidity1," ",temperature2," ",humidity2," ",pressure," ",wind_dir, " ", forecast)

    conn = MySQLdb.connect('localhost', 'meteouser', 'kwZuq7b3', 'meteo')
    cursor = conn.cursor()

    date = "INSERT INTO first(temperature1, humidity1, temperature2, humidity2, pressure, wind_dir) VALUES(%s, %s,%s,%s,%s,%s);"
    value = (temperature1, humidity1, temperature2, humidity2, pressure, wind_dir)

    cursor.execute(date, value)

    conn.commit()
    cursor.close()
    conn.close()

def pressureTrend(pressure1, pressure2):
    eps = 0.01;

    result = (pressure2 - pressure1) / pressure1;

    if abs(result) <= eps:
        result = 0.0;

    if result < 0:
        result = -0.2;
    elif result > 0:
        result = 0.2;

    return result;