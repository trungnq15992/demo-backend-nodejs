const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//console.log("check log : ", process.env)


//config template engine
app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')

//config static files
app.use(express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
    res.send('ABCD')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

