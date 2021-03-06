import os
from flask import Flask, render_template, url_for, redirect
app = Flask(__name__, template_folder = "./src/templates", static_folder = "./src/static")

app.config.update(
	TESTING = True,
	SECRET_KEY = os.urandom(32)
)

@app.route("/todo", methods = ["GET"])
def home():
	print(__name__)
	return render_template("home.html")

@app.route("/home", methods = ["GET"])
@app.route("/", methods = ["GET"])
def todo():
	return render_template("list.html", listId = 1)

@app.errorhandler(404)
def notFound(e):
	print("File not found", e)
	return redirect(url_for("home"))


if __name__ == "__main__":
	app.run(debug = True)
