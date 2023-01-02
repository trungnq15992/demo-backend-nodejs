require('dotenv').config();

const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const apiRouters = require('./routes/api');
const connection = require('./config/database');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

//config req.body (get data form add user)
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//console.log("check log : ", process.env)

//config template engine
configViewEngine(app);

//route
//app.use('/v1' ,webRouters);
app.use('', webRouters);
app.use('/v1/api/', apiRouters);

//test connection
(async () => {
    try {
        //using mongooose
        await connection();

        //using mongodb driver
        // const url = process.env.DB_HOST_WITH_DRIVER;
        // const client = new MongoClient(url);
        // const dbName = process.env.DB_NAME;

        // await client.connect();
        // console.log('Connected successfully to server');

        // const db = client.db(dbName);
        // const collection = db.collection('customers');
        // collection.insertOne({ "name": "trung" });
        //console.log(">>find:", await collection.findOne({ name: "quoc"}));

        app.listen(port, () => {
            console.log(`Backend_NodeJS app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB", error);
    }
})()



