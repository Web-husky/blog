//存放blog路由相关内容
function handleBlogRouter(req, res) {
    const method = req.method;
    if (method == 'GET' && req.path == '/api/blog/list') {
        //向数据库获取博客信息  sql
        console.log(req.query);
        return {
            id: '1',
            titleL: '标题1',
            content: '内容',
            time: '654566'
        }
    }
    if (method == 'GET' && req.path == '/api/blog/detail') {
        //向数据库获取博客信息  sql
        return {
            id: '1',
            titleL: '标题1',
            content: '内容asdad',
            time: '654566'
        }
    }
}
module.exports = {
    handleBlogRouter
}