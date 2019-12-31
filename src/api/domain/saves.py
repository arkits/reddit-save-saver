from loguru import logger
import config
import pymongo
import json

# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']


def get_saves(username, request_data):

    request_data = parse_request_data(request_data)

    logger.info("Received get_saves for username={} / request_data={}",
                username, request_data)

    to_return = {
        "username": username,
        "saved_posts": []
    }

    db_user_collection = rssDb[username]

    posts = db_user_collection.find(limit=request_data["limit"], skip=request_data["skip"]).sort(
        "created_utc", pymongo.DESCENDING)

    for post in posts:

        parsed_post = {}

        parsed_post["title"] = post["title"]
        parsed_post["permalink"] = post["permalink"]
        parsed_post["ups"] = post["ups"]
        parsed_post["author"] = post["author"]
        parsed_post["subreddit"] = post["subreddit"]
        parsed_post["created_utc"] = post["created_utc"]
        parsed_post["id"] = post["id"]

        to_return["saved_posts"].append(parsed_post)

    return to_return


def parse_request_data(request_data):

    parsed_request_data = {
        "skip": 0,
        "limit": 10
    }

    if request_data["skip"]:
        parsed_request_data["skip"] = int(request_data["skip"])

    if request_data["limit"]:
        parsed_request_data["limit"] = int(request_data["limit"])

    return parsed_request_data
