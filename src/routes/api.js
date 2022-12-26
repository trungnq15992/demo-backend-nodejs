const express = require('express');

const routerAPI = express.Router();

const {getUsersAPI, postCreateUserAPI} = require('../controllers/apiControllers');

routerAPI.get('/', (req,res) => {
    res.send("Hello World")
});

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);

module.exports = routerAPI;