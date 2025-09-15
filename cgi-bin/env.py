#!C:\Users\qzyma\AppData\Local\Microsoft\WindowsApps\python.exe
import sqlite3
import json
import sys
import os

print("Content-Type: text/html\n")  # CGI needs headers
print(sys.argv)
print('<br>--------------------------------------------<br>')
for item in os.environ:
    print(f"{item} => {os.environ[item]}<br>")