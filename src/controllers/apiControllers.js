const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles} = require('../services/fileService');

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let email = req.body.emailId;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.emailId;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    let user = await User.updateOne({ _id: userId }, { city: city, email: email, name: name });

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let user = await User.deleteOne({
        _id: id
    });
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const postUploadSingleFileApi = async (req,res) => {

    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('no files were uploaded');
    }
    let result = await uploadSingleFile(req.files.image);
    console.log('>>check result: ', result);
    return res.send('OK');
}

const postUploadMultipleFilesApi = async (req,res) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }
    //console.log(req.files);
    //upload single -> files is an object
    //upload multiple -> file is an array
    if(Array.isArray(req.files.image)){
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        //single file
        return await postUploadSingleFileApi(res, req);
    }

  
}

module.exports = {
    getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, 
    postUploadSingleFileApi, postUploadMultipleFilesApi
}