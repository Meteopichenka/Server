import threading
from listener import main as listener
from http_server import main as httpserv
import subprocess

def http_server_thread():
    httpserv()
    pass

def server_listener_thread():
    listener()
    pass
def info_run():
    subprocess.call("php materials/alpha.php")
    pass


http_server_thread = threading.Thread(target=http_server_thread, name="http_server_thread")
server_listener_thread = threading.Thread(target=server_listener_thread, name="server_listener_thread")
info_run_thread = threading.Thread(target=info_run, name="php_run")

http_server_thread.start()
server_listener_thread.start()
info_run_thread.start()