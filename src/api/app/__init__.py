from flask import Flask
from domain import version

from loguru import logger
import logging

SERVER_NAME = version.get_version()['name']

# create a custom handler
class InterceptHandler(logging.Handler):
    def emit(self, record):
        logger_opt = logger.opt(depth=6, exception=record.exc_info)
        logger_opt.log(record.levelno, record.getMessage())


class customFlask(Flask):

    #Every response will be processed here first
    def process_response(self, response):
        response.headers['server'] = SERVER_NAME
        response.headers['Access-Control-Allow-Origin'] = "*"
        response.headers['Access-Control-Allow-Headers'] = "*"
        response.headers['Access-Control-Request-Headers'] = "*"
        return(response)

app = customFlask(__name__)

# logging properties are defined in config.py
logger.start("log/rss-api.log", level="INFO", backtrace=True, rotation='25 MB')

# register loguru as handler
app.logger.addHandler(InterceptHandler())

from app import routes