var mysql=require('mysql');

var pool=mysql.createPool({
           database:'web1702',
           user:'root',
           password:'root'
        
        })
pool.getConnection(function(err,connection){
        if(err){
            throw err
        }else{
            var sql ='select * from xk_course'
            connection.query(sql,function(err,results){
                    if(err){
                       throw err
                    }else{
                     console.log(results)
                     }      
                    })
            connection.release();
            pool.end();
            } 

        })
//pool.end();
console.log('先开始')
