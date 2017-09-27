var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req,resp){
            var pathname = url.parse(req.url).pathname;
 //           console.log(req.url);
  //          console.log(url.parse(req.url));
    //        console.log(pathname);
      //      console.log(url.parse(req.url).query);

            var method = req.method;
            resp.writeHead(200,'ok',{
            'Content-Type':'text/plain;charset=utf-8',
           'Access-Control-Allow-Origin':'*'
                                                                            });
           switch(pathname){
               case '/students':
              //查询所有学生
          studentDB.findAll(function(results){
                                                                               resp.end(JSON.stringify(results));
                                                                                });
               break;
               case '/students/findById':
                                                                            //通过id查找学生
                                                                            break;
                                                                                    case
                                                                                    '/students/deleteById':
                                                                                                //通过id删除学生
                   break;
                                                                                            case
                                                                                                'students/save':
                                                                                                            //保存
                                                                                                            break;
                                                                                                    default:
                                                                                                        
                                                                                                }
                        
});

server.listen(8080,function(){
            console.log("8080端口已经成功开启");        
            });

