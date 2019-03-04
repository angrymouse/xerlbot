var mysql      = require('mysql');
var sql = mysql.createConnection({
  host     : '80.87.203.178',
  user     : 'cp334497_xerl',
  password : 'Hippothebest1',
  database : 'cp334497_xerl'
});

sql.connect();

sql.query("SELECT * FROM servers",(err,res,field)=>{
  if(err){console.log(err)}
  console.log(res)
})

sql.end();
