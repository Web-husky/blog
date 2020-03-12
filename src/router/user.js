//处理用户相关的路由
function handleUserRouter(req,res){
    const method = req.method;
    console.log(req.body);
    //登录博客
    if (method == 'POST' && req.path == '/api/user/login') {
        //向数据库获取博客详情  sql
        return {
            mes:'登录'
        }
    }
}
module.exports =  handleUserRouter;