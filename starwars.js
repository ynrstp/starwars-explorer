var express = require('express');
require('dotenv').config();

var app = express();

app.use(express.static('assets'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

var server = app.listen(process.env.PORT, function() {
    console.log('App listening on port: ' + server.address().port);

});
