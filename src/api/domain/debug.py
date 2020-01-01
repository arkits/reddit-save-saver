from loguru import logger
import config
import pymongo
from domain import version


# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']


def get_debug(username):

    logger.info("Received get_debug for username={}", username)

    to_return = {}

    to_return["username"] = username

    to_return["number_of_posts"] = calc_number_of_posts(username)

    to_return["last_dump"] = calc_last_dump()

    to_return["api"] = version.get_version()

    return to_return


def calc_number_of_posts(username):

    n_posts = 0

    db_user_collection = rssDb[username]
    n_posts = db_user_collection.find().count()

    return n_posts


def calc_last_dump():

    last_dump_timestamp = 0

    db_meta_collection = rssDb["db_meta"]
    last_dump = db_meta_collection.find_one({"key":"last_dump"})

    if last_dump is not None:
        last_dump_timestamp = last_dump["value"]

    return last_dump_timestamp