require('dotenv').config();
const mysql = require('mysql2');

//test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //default 3306
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

module.exports = connection;