import threading
from http.server import HTTPServer, CGIHTTPRequestHandler
import socket

def http_server_thread():
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, CGIHTTPRequestHandler)
    httpd.serve_forever()
    pass

def server_listener_thread():
    sock = socket.socket()
    sock.bind(('', 9090))
    sock.listen(1)
    conn, addr = sock.accept()

    print('connected:', addr)

    while True:
        data = conn.recv(1024)
        if not data:
            break
        conn.send(data.upper())

    conn.close()
    pass

http_server_thread = threading.Thread(target=http_server_thread, name="http_server_thread")
server_listener_thread = threading.Thread(target=server_listener_thread, name="server_listener_thread")


http_server_thread.start()
server_listener_thread.start()

#ttp_server_thread.join()
#server_listener_thread.join()