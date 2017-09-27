 var mysql=require('mysql');
// console.log(mysql)
 var connection =mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'root',
        database:'web1702'
         })
  connection.connect();
  var sql = 'select * from xk_clazz';
  connection.query(sql,function(err,results,fields){
                      if(err){
                         throw err;
                     } else{
                                                                                            console.log(results);
                        console.log(fields);
                                                                                         }
               });
connection.end();
