const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req,res) => {
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
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results})
}

const getABC = (req,res) => {
    res.send('ABC')
}

const postCreateUser = async (req,res) => {    
    let email = req.body.emailId;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email:", email, 'name =',  name, 'city=' ,city);

    // connection.query(
    //     ` INSERT INTO Users (email,name,city) 
    //     VALUES (?, ?, ?) `,
    //     [email, name, city],
    //     function(err, results) {
    //         console.log(results);
    //         res.send('success')
    //     }
    // ); 
    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email,name,city) 
        VALUES (?, ?, ?) `,
        [email, name, city]
    );

   // const [results, fields] = await connection.query('SELECT * FROM Users u');
    console.log(">>results ", results);
    res.send('success')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    console.log("get UserId", results);
    res.render('edit.ejs')
}


module.exports = {
    getHomepage, getABC, postCreateUser, getCreatePage, getUpdatePage
}