const http = require('http')
const fs = require('fs')
const path = require('path')
const data = require('./produtos.json')

function writeFile(cb){
    fs.writeFile(
        path.join(__dirname, "produtos.json"),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err

            cb(JSON.stringify({message: "ok"}))
        }
        
    )
}

http.createServer((req,res) => {
    const url = new URL(`http://localhost:3000${req.url}`)

    const codigo = url.searchParams.get('codigo')
    const nome = url.searchParams.get('nome')
    const date = url.searchParams.get('data')
    const del = url.searchParams.get('del')


    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    if(!codigo || !nome || !data)
        return res.end(JSON.stringify(data))

    if(del){
        data.produtos = data.produtos.filter(item => String(item.codigo) !== String(codigo))
        return writeFile((message) => {res.end(message)})
    }
    
    data.produtos.push({codigo, nome, date})
    return writeFile((message) => {res.end(message)})
}).listen(3000, () => {console.log("Api está rodando")})