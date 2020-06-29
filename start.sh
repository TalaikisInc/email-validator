#!/bin/bash

sudo apt-get install xz-utils -y
sudo wget https://nodejs.org/dist/v12.18.0/node-v12.18.0-linux-x64.tar.xz
sudo tar -C /usr/local --strip-components 1 -xJf node-v12.18.0-linux-x64.tar.xz
sudo ls -l /usr/local/bin/node
sudo ls -l /usr/local/bin/npm
source ~/.profile
sudo rm node-v12.18.0-linux-x64.tar.xz

npm i
npm i -g pm2

pm2 start index.js
