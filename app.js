const express = require('express')
const app = express()  //EXPRESS
const hbs = require('hbs'); //HANDLEBARS
require('dotenv').config()

//RECONOCER HANDLEBARS Y PARCIALES ()
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public')) //RECONOCER ARCHIVOS ESTATICOS (CSS)

// RUTAS PRE RENDERIZADAS ----------------------------
app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Node y Express. Rutas y template engines'
  });
})
app.get('/generic', (req, res) => {
  res.render('generic');
})
app.get('/elements', (req, res) => {
  res.render('elements');
})

//EJEMPLOS SIN PRE-RENDERIZADO
// app.get('/index', (req, res) => {
//   res.sendFile(__dirname+'/public/index.html')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname+'/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname+'/public/elements.html')
// })


app.listen( () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

app.listen(process.env.PORT)