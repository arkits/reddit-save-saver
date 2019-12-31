from flask_httpauth import HTTPBasicAuth
from werkzeug.security import check_password_hash
import config

auth = HTTPBasicAuth()

users = config.users

@auth.verify_password
def verify_password(username, password):
    if username in users:
        return check_password_hash(users.get(username), password)
    return False