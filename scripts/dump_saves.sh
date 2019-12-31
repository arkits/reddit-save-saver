#!/bin/bash
# dump_save.sh

# Stop if there is an error
set -e

# Go to rss home
cd /opt/software/reddit-save-saver
pwd

python3 --version

# Install requirements
pip3 install -r requirements.txt   

# Go to dump_saves dir
cd src/dump_saves

# Run it!
python3 dump_saves.py