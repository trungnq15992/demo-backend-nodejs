const connection = require('../config/database');

const getHomepage = (req,res) => {
    // simple query
    // let users = [];
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function(err, results, fields) {
    //         users = results;
    //         console.log(">>>results= ", results); // results contains rows returned by server
    //         //res.render('sample.ejs')
    //         console.log(">>users= ",users);
    //         res.send(JSON.stringify(users))
    //     }
    // );
    return res.render('home.ejs')
}

const getABC = (req,res) => {
    res.send('ABC')
}

const postCreateUser = (req,res) => {
    console.log(">>> req.body: ", req.body);
    res.send('create a new user')
}

module.exports = {
    getHomepage, getABC, postCreateUser
}