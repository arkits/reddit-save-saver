#!/bin/bash
# run_api.sh

cd /opt/software/reddit-save-saver

pip3 install -r requirements.txt

cd /opt/software/reddit-save-saver/src/api
nohup flask run > /dev/null 2>&1 & 