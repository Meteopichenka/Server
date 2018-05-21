

db= MySQLdb.connect("localhost", "meteouser", "kwZuq7b3", "meteo")

cursor= db.cursor()

cursor.execute("INSERT INTO first (temperature1, humidity1, temperature2, humidity2, pressure, wind_dir) VALUES (t1,h1,t2,h2,p,w)")

db.close()

