var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'restaurant-db.cojyialevtxf.us-east-1.rds.amazonaws.com',

    port: '3306',

    user:'admin',

    password:'2101737A',

    database: 'mydb'

});



connection.connect(err => {  // test out connetion and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});

module.exports = connection;
