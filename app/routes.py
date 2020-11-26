from flask import render_template, redirect, request
from app import app

@app.route('/')
@app.route('/home')
def index():
	return render_template('index.html')

@app.before_request
def remove_trailing_slash():
	path = request.path
	if path != '/' and path[-1] == '/':
		return redirect(path[:-1])