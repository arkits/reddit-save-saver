#!/bin/bash
# kill_api.sh

PID=`ps -eaf | grep "opt/software/reddit-save-saver/.env/bin" | grep -v grep | awk '{print $2}'`

if [[ "" !=  "$PID" ]]; then
  echo "killing $PID"
  kill -9 $PID
fi