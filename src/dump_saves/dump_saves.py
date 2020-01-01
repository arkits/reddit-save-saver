"""
name:   dump_saves.py
author: Archit Khode
about:  Dumps Reddit Saves to a MongoDB instance.
"""

import praw
import config
from loguru import logger
import pymongo
import traceback
import time


# Reddit Creds
creds = config.CREDS


# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']


def main():

    for profile_name in creds:

        logger.info("Running save for /u/{}", profile_name)

        profile = creds[profile_name]

        try:

            reddit = praw.Reddit(
                username=profile["username"],
                password=profile["password"],
                client_id=profile["client_id"],
                client_secret=profile["client_secret"],
                user_agent='Saver Script by /u/arkits',
            )

            if reddit.user.me():

                redditor = reddit.user.me()
                logger.info("✅ Login Successful - {}", redditor)

                db_user_collection = rssDb[profile["username"]]

                saved_posts = redditor.saved(limit=1)

                saved_post_list = []

                for saved_post in saved_posts:

                    try:
                        author = saved_post.author.name
                    except Exception as e:
                        author = "undefined"

                    try:
                        thumbnail = saved_post.thumbnail
                    except Exception as e:
                        thumbnail = None

                    parsed_post = {
                        "title": saved_post.title,
                        "permalink": saved_post.permalink,
                        "ups": saved_post.ups,
                        "subreddit": saved_post.subreddit_name_prefixed,
                        "created_utc": saved_post.created_utc,
                        "author": author,
                        "id": saved_post.id,
                        "thumbnail": thumbnail
                    }

                    if db_user_collection.find_one({"id": parsed_post["id"]}) is None:
                        logger.info("Found new Saved Post - {}", parsed_post["id"])
                        saved_post_list.append(parsed_post)
                    else:
                        logger.info("Updating Saved Post - {}", parsed_post["id"])
                        if_id_exists = {"id": parsed_post["id"]}
                        update_doc = {"$set": parsed_post}
                        db_user_collection.update_one(if_id_exists, update_doc)

                if len(saved_post_list) > 0:
                    logger.info(
                        "Number of saved posts collected - {}", len(saved_post_list))
                    db_user_collection.insert_many(saved_post_list)

                save_dump_timestamp()

                logger.info("✅ {} - Save Procedure Complete!", redditor)

        except Exception as e:
            logger.error("⚠️  Caught Exception - {}", e)
            traceback.print_exc()


def save_dump_timestamp():

    db_meta_collection = rssDb["db_meta"]

    dump_timestamp = {
        "key" : "last_dump",
        "value" : int(time.time())
    }

    if_key_exists = {"key": "last_dump"}
    update_doc = {"$set": dump_timestamp}
    result = db_meta_collection.update_one(if_key_exists, update_doc, upsert=True)

    logger.info("dump_timestamp={}", dump_timestamp)


if __name__ == '__main__':
    main()
