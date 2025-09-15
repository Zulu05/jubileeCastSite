#!C:\Users\qzyma\AppData\Local\Microsoft\WindowsApps\python.exe
import sqlite3
import json
import sys
import os

print("Content-Type: application/json\n")  # CGI needs headers

length = int(os.environ.get("CONTENT_LENGTH", 0))
body = sys.stdin.read(length)
data = json.loads(body) if body else {}
func = data.get("type")

con = sqlite3.connect("C:/jubileeCastSite/QnA.db")
cur = con.cursor()

#below for printing column names
# res = cur.execute("SELECT * FROM questions")
# names = [description[0] for description in cur.description]
# print(names)

if func == "add":
    values = [
    data.get("question"), data.get("user"), data.get("date")
]
    cur.execute("INSERT INTO questions VALUES(?,?,?)",  values)
    con.commit()

    print(json.dumps({"status": "added", "data": values}))
elif func == "get":
    values = cur.execute("SELECT * FROM questions")
    values = values.fetchall()
    print(json.dumps({"status": "retrieved", "data": values}))
else:
    # values = cur.execute("SELECT * FROM questions")
    # print(values.fetchall())    
    print(json.dumps({"status": "error", "data": "error"}))
    
con.close()