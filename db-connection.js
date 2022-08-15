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

var express = require('express');
var app = express();
app.route('/mysql').get(fromMYSQL);


function fromMYSQL(request, respond){

    var sql = "Select * from restaurants";
connection.query(sql, function (err,result){
    console.log(result);
})

}

app.listen(8080);
console.log("http://127.0.0.1:8080/mysql%22);

// module.exports = connection;
