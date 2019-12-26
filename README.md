# reddit-save-saver
 
## About

> This is a simple full-stack app to backup a user's reddit saved posts and display them.

If you've used reddit for a while, then you must've saved a-whole-lot of posts. Unfortunatly, a user can only save upto ~1000 posts, afterwhich old posts get popped out of this list of saved posts. This project is meant to work around that!

### Notes

* The Python script in `src/dump_saves` does the majority of work by logging get all of the user's saved posts and then dumping them to a MongoDB collection. The Python script can be invoked by `scripts/dump_saves.sh` from a crontab.
* API - Coming Soon...
* Frontend - Eventually...


## Setup

### MongoDB Setup 

* Grab a MongoDB instace. The free-tier from Atlas will suffice.
* In your MongoDB instance, create a database called `reddit_save_saver`. 
* Collections are automatically created by `dump_save.py`. For each user, a collection is created.

### Reddit API Setup

* Get Reddit API creds - 
    * Go to https://www.reddit.com/prefs/apps/
    * Click on `create app` and create a `script` type app. The URLs don't matter. 
    * Note down the `client_id` and `client_secret`. 

* Create a `src/dump_saves/config.py` based on `src/dump_saves/config.py.sample`

