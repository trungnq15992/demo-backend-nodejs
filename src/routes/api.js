const express = require('express');

const routerAPI = express.Router();

const {getUsersAPI} = require('../controllers/apiControllers');

routerAPI.get('/', (req,res) => {
    res.send("Hello World")
});

routerAPI.get('/users', getUsersAPI);

module.exports = routerAPI;