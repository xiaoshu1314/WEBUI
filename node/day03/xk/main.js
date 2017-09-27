 require('./db/pool');
var studentDB=require('./db/studentDB');

// studentDB.findById(3,function(results){
//         console.log(results)
//         })

var http =require('http');
var url =require('url');
var querystring =require('querystring');

var server =http.createServer(function(req,resp){
	var pathname =url.parse(req.url).pathname;
	var method =req.method;
     var id = querystring.parse(url.parse(req.url).query).id;
    var name = querystring.parse(url.parse(req.url).query).name;
    var gender = querystring.parse(url.parse(req.url).query).gender;
    var birth = querystring.parse(url.parse(req.url).query).birth;
    resp.writeHead(200,'ok',{
         'Content-Type':'text/plain;charset=utf-8',
         'Access-Control-Allow-Origin':'*'

           });
     switch(pathname){
     	case '/students':
     	studentDB.findAll(function(results){
            // console.log(results)
     		resp.end(JSON.stringify(results));
     	})
     	   break;
         // case '/students/deleteById':
         // studentDB.deleteById(id,function(results){
         //    resp.end("删除成功。。。")
         // })
         //   break;
        case '/students/findById':
        studentDB.findById(id,function(results){
            console.log(results)
            resp.end(JSON.stringify(results));
        })
           break;

     }
})
server.listen(8080,function(){
	console.log('8080端口已经成功开启')
})