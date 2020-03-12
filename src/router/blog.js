//存放blog路由相关内容
function handleBlogRouter(req, res) {
    const method = req.method;
    //console.log(req.query);
    //console.log(req.body);
    if (method == 'GET' && req.path == '/api/blog/list') {
        //向数据库获取博客信息  sql
        return {
            id: '1',
            titleL: '标题1',
            content: '内容',
            time: '654566'
        }
    }
    if (method == 'GET' && req.path == '/api/blog/detail') {
        //向数据库获取博客详情  sql
        return {
            id: '1',
            titleL: '标题1',
            content: '内容asdad',
            time: '654566'
        }
    }
    //新增一篇博客
    if (method == 'POST' && req.path == '/api/blog/new') {
        //向数据库获取博客详情  sql
        return {
            mes:'新增博客接口'
        }
    }
     //更新一篇博客
     if (method == 'POST' && req.path == '/api/blog/update') {
        //向数据库获取博客详情  sql
        return {
            mes:'更新一篇接口'
        }
    }
     //删除一篇博客
     if (method == 'POST' && req.path == '/api/blog/del') {
        //向数据库获取博客详情  sql
        console.log(req.body);
        return {
            mes:'删除接口'
        }
    }
     
}
module.exports = handleBlogRouter;