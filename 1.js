var http = require('http')

var server = http.createServer(function (req, res) {
    console.log('hi')
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.write('<h1> Hello world</h1>')
    res.end()
})
server.listen(9000)