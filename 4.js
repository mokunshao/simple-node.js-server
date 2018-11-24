var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req, res) {
    var pathObj = url.parse(req.url, true)
    console.log(pathObj)

    switch (pathObj.pathname) {
        case '/getWeather':
            var ret
            if (pathObj.query.city == 'beijing') {
                ret = { city: 'beijing', weather: '晴天' }
            } else {
                ret = { city: pathObj.query.city, weather: '不知道' }
            }
            res.end(JSON.stringify(ret))
            break;
        default:
            try {
                var fileContent = fs.readFileSync(__dirname + pathObj.pathname)
                res.write(fileContent)
            } catch (e) {
                res.writeHead(404, 'not found')
            }
            res.end()
    }
}).listen(8080)

console.log('Visit http://localhost:8080/getWeather?city=beijing')