const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jahiker roJas'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hello Data');
});

app.listen(3000, () => console.log(`Escuchando peticiones en puerto ${port}`));