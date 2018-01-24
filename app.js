const express = require( 'express' );
const app = express(); // crea una instancia de una aplicación de express
const morgan = require('morgan')

app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
}))


app.get('/',function(req,res){
    res.send("sisisi")
})

app.get('/gary',function(req,res){
    res.send("hola gary")
})

app.post('/gary',function(req,res){
    res.send("puto el qque lee")
    
})
app.listen(3000)