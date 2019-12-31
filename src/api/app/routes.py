from app import app
from domain import version
from domain import saves

from flask import Flask
from flask import jsonify
from flask import request
from flask import make_response

from app import auth

auth = auth.auth

import json

@app.route('/')
@app.route('/api')
def version_handler():
    return jsonify(version.get_version())

@app.route('/api/saves')
@auth.login_required
def get_saves():
    return jsonify(saves.get_saves(auth.username()))
