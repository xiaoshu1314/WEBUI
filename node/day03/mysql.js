  var mysql=require('mysql');
  // console.log(nn)

// 创建数据库的链接对象
 var connection =mysql.createConnection({
   host:'127.0.0.1',
   prot:'3306',
   user:'root',
  password:'root',
  database:'web1702' 

})
// console.log(conec)
//连接对象
  connection.connect();
  var sql='select * from xk_student';
  connection.query(sql,function(err,result,fields){
     if(err){
         throw err;
      } else{
      //console.log(result);
     // console.log(fields)
 
     }
  //console.log(conec.query)
  })

    connection.end();




