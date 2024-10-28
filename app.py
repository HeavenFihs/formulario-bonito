import requests
from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit", methods = ["POST"])
def submit():
    if request.method == "POST":
        codigo = request.form["codigo"]
        nombre = request.form["nombre"]
        apellido = request.form["apellido"]
        email = request.form["email"]
        profesor = request.form["profesor"]
        horario = request.form["horario"]

    data = {
        "fecha": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "codigo": codigo,
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "profesor": profesor,
        "horario": horario
    }

    try:
        url = "https://script.google.com/macros/s/AKfycbw_Np_ZNon5-xdhGcxo2ezuRsiFVmte362-pBFhDEf9b2SurkegKQps41-7V-6yrzYj/exec"
        response = requests.post(url,json = data)
        result = response.json()

        if "El código ya fue utilizado hoy." in response.text:
            return redirect(url_for("resultado",status="error1"))
        if "El horario seleccionado ya está reservado por hoy." in response.text:
            return redirect(url_for("resultado",status="error2"))
        else: return redirect(url_for("resultado",status="exito"))
    except Exception as e:
        return redirect(url_for("resultado",status="noConect"))
    
@app.route("/resultado/<status>")
def resultado(status):
    # status = exito | error1 | error2 | noConect
    return render_template("resultado.html",status = status)

if __name__ == "__main__":
    app.run(debug=True)

















    