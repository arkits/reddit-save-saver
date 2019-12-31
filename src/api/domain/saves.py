from loguru import logger
import config
import pymongo

# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']

def get_saves(username):

    to_return = {
        "username": username,
        "saved_posts": []
    }

    logger.info("Received get_saves for username={}", username)

    db_user_collection = rssDb[username]

    posts = db_user_collection.find(limit=10)

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
