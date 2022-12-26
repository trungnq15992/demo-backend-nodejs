const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');
const User = require('../models/user');

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    let email = req.body.emailId;
    let name = req.body.myname;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city
    })
    res.send('create success');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    //let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.emailId;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    await User.updateOne({ _id: userId }, { city: city, email: email, name: name });

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    //let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    //let user = await deleteUserById(id);
    await User.deleteOne({
        _id: id
    });
    res.redirect('/');
}

module.exports = {
    getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}