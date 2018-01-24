const routes = require('./routes');
const express = require( 'express' );
const app = express(); // crea una instancia de una aplicación de express
// const morgan = require('morgan')
const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')))

// app.use(morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms'
//     ].join(' ')
// }))

//nunjucks:
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates


app.listen(3000)