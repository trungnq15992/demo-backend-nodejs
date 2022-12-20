const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views/'))
    app.set('view engine', 'ejs');
    //config static files
    // console.log(__dirname);
    //app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;