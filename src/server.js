require('dotenv').config();

const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//console.log("check log : ", process.env)

//config template engine
configViewEngine(app);

//route
app.use('/v1' ,webRouters);

// simple query
// connection.query(
//     'SELECT * FROM Users u',
//     function(err, results, fields) {
//       console.log(">>>results= ", results); // results contains rows returned by server
//     }
// );

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

