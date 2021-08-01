const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const data = require('./produtos.json')

function writeProduto(cb) {
    fs.writeFile(
        path.join(__dirname, "produtos.json"),
        JSON.stringify(data, null, 2),
        err => {
            if(err) throw err

            cb(JSON.stringify({message: "ok"}))
        }
    )
}

http.createServer((req, res) => {
   res.writeHead(200, {
       'Access-Control-Allow-Origin': '*'
   })

}).listen(3000)