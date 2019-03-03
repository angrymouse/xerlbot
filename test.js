var mysql      = require('mysql');
var connection = mysql.createConnection('mysql://epiz_23505828:hippothebest1@sql213.epizy.com/epiz_23505828_xerl'
);

connection.connect();

connection.query('SELECT *', function (error, results, fields) {
 if (error) console.log( error)
  console.log('The solution is: ', results);
});

connection.end();
