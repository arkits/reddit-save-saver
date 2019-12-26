#!/bin/bash
# dump_save.sh

# Stop if there is an error
set -e

# Go to root
cd ..

# Enable venv
source .env/bin/activate

# Go to dump_saves dir
cd src/dump_saves

# Run it!
python dump_saves.py