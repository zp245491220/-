var getRawBody = require('raw-body');
var getFormBody = require("body/form");
var body = require('body');

module.exports.handler = function(req, resp, context) {

    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method : req.method,
        requestURI : req.url,
        clientIP : req.clientIP,
    }

    getRawBody(req, function(err, body) {
        params.body = body.toString();
        var heart = (Math.random() * 100)
        resp.send(JSON.stringify(heart + "个星星指数!", null, '    '));
    });


    //这里还可以操纵数据库模块，进行定时操作

    /*
    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        console.log(formBody);
        resp.send(JSON.stringify(params));
    }); 
    */
}