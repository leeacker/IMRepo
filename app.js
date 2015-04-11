var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/tuffline', indexController.tuffline);
app.get('/ezipop', indexController.ezipop);
app.get('/swingbox', indexController.swingbox);
app.get('/xpand', indexController.xpand);
app.get('/mediaBeacon', indexController.mediaBeacon);
app.get('/about', indexController.about);


var server = app.listen(6589, function() {
	console.log('Express server listening on port ' + server.address().port);
});
