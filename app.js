//处理http 请求和响应
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');
function handleServer(req,res){
   res.setHeader('Content-type','application/json');
   const method = req.method;
   req.path = req.url.split('?')[0];
   
   req.query = querystring.parse(req.url.split('?')[1]);  //{key:www,id:111}
  
   //处理博客请求
   const blogDate = handleBlogRouter(req,res);
   if(blogDate){
      res.end(JSON.stringify(blogDate)); 
      return;
   }
   
   //处理用户登录
   const userDate = handleUserRouter(req,res);
   if(userDate){
        res.end(JSON.stringify(userDate));
        return;
   }
  
}
module.exports = handleServer;
//业务模块抽离：一个模块做一类事