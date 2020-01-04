from loguru import logger
import config
import pymongo
import json
import random

# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']


# Entry-point to /api/saves
def get_saves(username, request_data):

    request_data = parse_request_data(request_data)

    logger.info("Received get_saves for username={} / request_data={}",
                username, request_data)

    to_return = {
        "username": username,
        "saved_posts": []
    }

    db_user_collection = rssDb[username]

    # MongoDB query
    posts = db_user_collection.find(limit=request_data["limit"], skip=request_data["skip"]).sort(
        "created_utc", pymongo.DESCENDING)

    to_return["saved_posts"] = generate_saved_posts(posts)

    return to_return


# Entry-point to /api/saves/random
# Note: This implementation uses the long way to get random posts.
# MongoDB allows for getting a random `sample` using the aggregate
# method, which is not supported in the free-tier for Mongo.
def get_random_saves(username):

    logger.info("Received get_random_saves for username={}", username)

    to_return = {
        "username": username,
        "saved_posts": []
    }

    db_user_collection = rssDb[username]

    posts = db_user_collection.find()

    random_posts = select_random_posts(posts)

    to_return["saved_posts"] = generate_saved_posts(random_posts)

    return to_return


def select_random_posts(posts):

    limit = 20

    random_post_index = []

    all_posts = []

    random_posts = []

    # Cursor through all posts
    for post in posts:
        all_posts.append(post)

    # Create a list on random numbers which will be used as a random indexs
    while len(random_post_index) < limit:
        random_index = random.randrange(0, len(all_posts) - 1)
        if random_index not in random_post_index:
            random_post_index.append(random_index)

    for rpi in random_post_index:
        random_posts.append(all_posts[rpi])

    return random_posts


# Dumped cursored MongoDB objectes into a dictionary with the relevant info
def generate_saved_posts(posts):

    saved_posts = []

    for post in posts:

        parsed_post = {}

        try:
            thumbnail = post["thumbnail"]
        except Exception as e:
            thumbnail = "self"

        parsed_post["title"] = post["title"]
        parsed_post["permalink"] = post["permalink"]
        parsed_post["ups"] = post["ups"]
        parsed_post["author"] = post["author"]
        parsed_post["subreddit"] = post["subreddit"]
        parsed_post["created_utc"] = post["created_utc"]
        parsed_post["id"] = post["id"]
        parsed_post["thumbnail"] = thumbnail

        saved_posts.append(parsed_post)

    return saved_posts


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
