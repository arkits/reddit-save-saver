from app import app
from domain import version
from domain import saves
from domain import debug

from flask import Flask
from flask import jsonify
from flask import request
from flask import make_response

from loguru import logger

import json

from app import auth


auth = auth.auth


@app.route('/', methods=['GET'])
@app.route('/api', methods=['GET'])
def version_handler():
    return jsonify(version.get_version())

@app.route('/api/saves', methods=['GET'])
@auth.login_required
def get_saves():
    response = jsonify(
        saves.get_saves(
            auth.username(),
            request.args
        )
    )
    return response


@app.route('/api/debug', methods=['GET'])
@auth.login_required
def get_debug():
    return jsonify(debug.get_debug(auth.username()))
