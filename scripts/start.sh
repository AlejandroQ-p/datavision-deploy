#!/bin/bash
cd /home/ubuntu/app
pm2 delete datavision-app || true
pm2 start index.js --name datavision-app
