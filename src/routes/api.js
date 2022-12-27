const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesApi } = require('../controllers/apiControllers');

routerAPI.get('/', (req, res) => {
    res.send("Hello World")
});

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);

routerAPI.post('/files', postUploadMultipleFilesApi);

module.exports = routerAPI;