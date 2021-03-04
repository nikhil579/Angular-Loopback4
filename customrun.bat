@echo off
cd server && npm start &
wait
cd ..
cd client && npm start
wait
cd ..