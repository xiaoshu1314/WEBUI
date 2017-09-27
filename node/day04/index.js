var express = require('express');

var app = express();
app.get('/students',function(req,resp){
        console.log(req.query);
        resp.send('已下是所有学生的信息')
 //   resp.writeHead(200,'ok',{
   //                     'Content-Type':'text/plain;charset=utf-8'
     //                           });
        })
 




app.listen(8080,function(){
        console.log('端口8080服务已经开启')
        })
