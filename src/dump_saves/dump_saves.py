"""
name:   dump_saves.py
author: Archit Khode
about:  Dumps Reddit Saves to a MongoDB instance.
"""

import praw
import config
from loguru import logger
import pymongo
import pyfiglet
import traceback


# Reddit Creds
creds = config.CREDS


# MongoDB Client
dbClient = pymongo.MongoClient(config.MONGODB_URI)
rssDb = dbClient['reddit_save_saver']


def main():

    ascii_banner = pyfiglet.figlet_format("rss!")
    print(ascii_banner)

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

                saved_posts = redditor.saved(limit=1000)

                saved_post_list = []

                for saved_post in saved_posts:

                    try:
                        author = saved_post.author.name
                    except Exception as e:
                        author = "undefined"

                    parsed_post = {
                        "title": saved_post.title,
                        "permalink": saved_post.permalink,
                        "ups": saved_post.ups,
                        "subreddit": saved_post.subreddit_name_prefixed,
                        "created_utc": saved_post.created_utc,
                        "author": author,
                        "id": saved_post.id
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

                logger.info("✅ {} - Save Procedure Complete!", redditor)

        except Exception as e:
            logger.error("⚠️  Caught Exception - {}", e)
            traceback.print_exc()


if __name__ == '__main__':
    main()
