from flask import render_template
from app import app

@app.route('/')
@app.route('/home/')
def index():
	return render_template('index.html')

@app.route('/error')
def error():
	return render_template('error.html')