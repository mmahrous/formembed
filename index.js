var ps = require('./process.js')
var express = require('express');
var bodyParser = require("body-parser");
var request = require("request");
var $ = require('jquery');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));

// home page 
app.get('/', function (req, res) {
  res.sendFile('index.html');
});

// Process page to get HTML from the form 
app.post('/checkurl', function (req, res){
	var url = req.body.url;
	res.send(ps.validate(url));
});
app.post('/checkreurl', function (req, res){
	var reurl = req.body.reurl;
	res.send(ps.revalidate(reurl));
});
app.post('/process', function (req, res){
	var url = req.body.url;
	var reurl = req.body.reurl;
	res.send(url);
});

app.post('/embed', function (req, res){
	var url = req.body.url;
	request(url, function (error, response, body) {
		res.send();
	});
});

var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
