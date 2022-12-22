const express = require('express');
const {getHomepage ,getABC ,postCreateUser, getCreatePage, getUpdatePage} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/abc', getABC);

router.post('/create-user', postCreateUser );

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

module.exports = router;