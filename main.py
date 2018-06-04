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
def php_run():
    subprocess.call("materials/alpha.php")

    # if you want output
    proc = subprocess.Popen("materials/alpha.php", shell=True, stdout=subprocess.PIPE)
    script_response = proc.stdout.read()

http_server_thread = threading.Thread(target=http_server_thread, name="http_server_thread")
server_listener_thread = threading.Thread(target=server_listener_thread, name="server_listener_thread")
php_run_thread = threading.Thread(target=php_run, name="php_run")

http_server_thread.start()
server_listener_thread.start()
php_run_thread.start()