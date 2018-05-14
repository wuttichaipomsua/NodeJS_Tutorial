var http = require('http');
var dt = require('./myfirstmodule');
var mssql=require('./nodemssql');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("data db: " + mssql.getName());
    res.end();
}).listen(8081);