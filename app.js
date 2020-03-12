//处理http 请求和响应
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');

//封装 获取 pos提交的数据
function getPostDate(req) {
    const method = req.method;
    const promise = new Promise(function (resolve, reject) {
        if (method != 'POST') {
            resolve({});
        }
        //客户端post发送数据的时候，只能发送数据
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        var postDate = '';
        req.on('data', function (data) {
            postDate += data;
        });
        req.on('end', function () {
            if(!postDate){
                resolve();
                return;
            }
            resolve(JSON.parse(postDate));
        });
    });
    return promise;
}


function handleServer(req, res) {
    res.setHeader('Content-type', 'application/json');
    const method = req.method;
    req.path = req.url.split('?')[0];
    //get数据
    req.query = querystring.parse(req.url.split('?')[1]);  //{key:www,id:111}


    getPostDate(req).then(function (postDate) {
        //post数据
       req.body=postDate;
       //处理博客请求
        const blogDate = handleBlogRouter(req, res);
        if (blogDate) {
            res.end(JSON.stringify(blogDate));
            return;
        }

        //处理用户登录
        const userDate = handleUserRouter(req, res);
        if (userDate) {
            res.end(JSON.stringify(userDate));
            return;
        }
        //不存在接口
        res.writeHead('404', { 'Content-type': 'text/plain' });
        res.write('404 not found');
        res.end();
    });




}
module.exports = handleServer;
//业务模块抽离：一个模块做一类事