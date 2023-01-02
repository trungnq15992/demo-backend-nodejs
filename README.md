# udemy-backend-nodejs

Udemy tutorial Backend NodeJS

Document
https://drive.google.com/file/d/1cEDAoauHFpVfHRoMMztj-fy5INkqnzrp/view?fbclid=IwAR3HGbm6iPlzEfmjd3UNDDb4pumpgIQbrnLMzdmE0qd4Vlhsoap0LPVmQII

- git clone https://github.com/trungnq15992/demo-backend-nodejs.git
- git checkout master
- git pull origin master

Cài đặt nodejs
Download version v14.17.0 (recommend) : https://nodejs.org/download/release/v14.17.0/
Kiểm tra kết quả bằng cách sử dụng câu lệnh:
node -v
npm -v

Khởi tạo package.json npm init

Cài đặt express 
npm i --save-exact express@4.18.2

Cài đặt EJS 
npm install --save-exact ejs@3.1.8

Cài đặt package dotenv 
npm install --save-exact dotenv@16.0.3

Cài đặt devtool 
npm install --save-dev nodemon@2.0.20

Sử dụng mysql với nodejs 
npm install --save-exact mysql2@2.3.3

npm install --save-exact mongoose@6.7.2

npm install mongoose-delete

npm i express-fileupload

npm install mongodb


Thay port nếu bị trùng trong file .evn

Run project
npm run start

mongod --version

MongoDB : create user and password
use admin
db.createUser(
{
user: "root1",
pwd: "root1", // or cleartext password
roles: []
}
)
