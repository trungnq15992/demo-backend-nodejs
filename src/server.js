require('dotenv').config()

const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web');

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//console.log("check log : ", process.env)

//config template engine
configViewEngine(app);

//route
app.use('/v1' ,webRouters);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

