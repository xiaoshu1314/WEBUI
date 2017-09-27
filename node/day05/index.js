var express=require('express');

var app=express();
var studentRouter =require('./routers/studentRouter')

app.use('/student',studentRouter)



app.listen(8080,function(){
        console.log('8080服务已经开启')
        })
