from flask import Flask,render_template,url_for,request,jsonify
from flask_cors import CORS
import paho.mqtt as mqtt,requests,time
app = Flask(__name__)
app.route("/")
def index():
    return render_template("index.html")
app.route("/api/datos")
def datos():
    
    return render_template("datos.html")
app.run("0.0.0.0",port = 8897,debug = False)