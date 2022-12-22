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
    let email = req.body.emailId;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email:", email, 'name =',  name, 'city=' ,city);

    connection.query(
        ` INSERT INTO Users (email,name,city) 
        VALUES (?, ?, ?) `,
        [email, name, city],
        function(err, results) {
            console.log(results);
            res.send('success')
        }
    );
}

module.exports = {
    getHomepage, getABC, postCreateUser
}