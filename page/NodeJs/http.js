var http = require("http");
http.createServer(function(req, res){
    console.log(req);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.write("123");
    res.end();
}).listen(8088);