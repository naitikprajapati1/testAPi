const express = require('express');
const app = express();
const data = require('./data');
const port = process.env.PORT || 5001;

app.set('view engine', 'ejs');
// set path
app.set('views', __dirname + '/views');

// Serve static assets from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/city', (req, res) => {
    res.send(data)
});
app.listen();


module.exports=app;