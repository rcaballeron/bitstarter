var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	
  //response.send('Hello World2!');
	response.send(fs.readFileSync('index.html'), function(error, data) {
		if (error) {
			console.log(error);
			throw error;
		}
		buf = new Buffer(data);
		response.send(buf.toString());
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
