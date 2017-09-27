  var http=require("http");
  var urlmodule=require('url');
  var qs=require('querystring')
 //创建http服务 遵从http协议；
  var app=http.createServer(function(req,resp){
   console.log("接受到了请求");
    var url=req.url;
 var method=req.method;
 var haha =urlmodule.parse(req.url)
 var host=req.headers.host;
 console.log(haha)
//  console.log(url,method,host)
  //console.log(req)
 
  var urlobj=urlmodule.parse(url);
// console.log(urlobj);
var pathname=urlobj.pathname;
var query=urlobj.query;
resp.writeHead(200,'ok',{'content-type':'text/plain;charset=utf-8'})
  switch(pathname){
      case  '/courses':
      resp.write('以下是所有课程的信息');

    if(method='GET'){
     var params=qs.parse(query);
    console.log(params)
   //   console.log(query);
      //resp.write(query)
}
     else {
      var param=new Buffer(0);
     req.on('data',function(data){
      param +=data;
   //console.log('gggggg',data)

})
    req.on('end',function(){
   console.log(querystring.parse(param.toString()));
})
  

}
      resp.end();
      break;
     
      case  '/students':
      resp.write('以下是所有学生的信息');
      resp.end();
      break;
      
      case  '/class':
      resp.write('以下是所有教室的信息');
      resp.end();
      break;

    default:
     resp.end('找不到您的资源')


}

});
//设定监听端口
 app.listen(8080,function(){
    console.log('8080服务已经开启')
});



