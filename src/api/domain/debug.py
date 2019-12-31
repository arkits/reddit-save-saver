from loguru import logger
import config
import pymongo
from domain import version

# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']

def get_debug(username):

    to_return = {
        "username": username,
    }

    logger.info("Received get_debug for username={}", username)
    db_user_collection = rssDb[username]

    n_posts = db_user_collection.find().count()
    to_return["number_of_posts"] = n_posts

    to_return["api"] = version.get_version()

    return to_return
