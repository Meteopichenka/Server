import threading
from listener import main as listener
from http_server import main as httpserv

def http_server_thread():
    httpserv()
    pass

def server_listener_thread():
    listener()
    pass

http_server_thread = threading.Thread(target=http_server_thread, name="http_server_thread")
server_listener_thread = threading.Thread(target=server_listener_thread, name="server_listener_thread")


http_server_thread.start()
server_listener_thread.start()