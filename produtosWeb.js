var http = require('http');

var server = http.createServer(function(req, res){
    res.end("html");
});

server.listen(3000);

console.log("servidor rodadno");
