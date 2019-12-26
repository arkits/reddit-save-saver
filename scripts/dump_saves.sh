#!/bin/bash
# dump_save.sh

# Stop if there is an error
set -e

# Go to root
cd $RSS_HOME

# Enable venv
source .env/bin/activate

# Install requirements
pip install -r requirements.txt

# Go to dump_saves dir
cd src/dump_saves

# Run it!
python dump_saves.py