var mysql      = require('mysql');
var sql = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'x7AOGsQwTV',
  password : 'APrqWNjWpP',
  database : 'x7AOGsQwTV'
});

sql.connect();

sql.query("SELECT adsprotection FROM servers  WHERE id = "+String("549757415713931264"),(err,res,field)=>{
  if(err){console.log(err)}
  console.log(res[0].adsprotection==false)
})

sql.end();
