var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'x7AOGsQwTV',
  password : 'APrqWNjWpP',
  database : 'x7AOGsQwTV'
});

connection.connect();

connection.query('SELECT * FROM `servers`', function (error, results, fields) {
 if (error) console.log( error)
  console.log('The servers is: ', results);
});

connection.end();
