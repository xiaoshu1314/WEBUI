 var express=require('express')
var studentRouter =express.Router();
 studentRouter.get('/findAll',function(req,resp){
           resp.send('查询所有学生信息')
         })
studentRouter.post('/login',function(req,resp){
           resp.send('登录成功')
          })
exports =studentRouter
