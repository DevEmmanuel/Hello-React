var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(5000, function (){
	console.log('Express running on port 3000');
});