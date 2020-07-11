import os
from flask import Flask, render_template, url_for, redirect
app = Flask(__name__, template_folder = "./src/templates", static_folder = "./src/static")

app.config.update(
	TESTING = True,
	SECRET_KEY = os.urandom(32)
)

@app.route("/", methods = ["GET"])
def home():
	print(__name__)
	return render_template("base.html", id=2)

if __name__ == "__main__":
	app.run(debug = True)