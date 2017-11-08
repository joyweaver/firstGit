    
var express = require('express');
var app = express();
var path = require('path');

//expose the file in the public folder so that the html can use it
app.use(express.static('public'));

//This is to show a route that will be handle by node
app.get('/test', function(req, res){
	res.send('test');
});

//any request that doesn't match the specified routes made in node will be
//handle by angular in the frontend
app.get('/*', function(req, res){
	res.sendFile(path.join(_dirname + '/public/index.html'));
});


//Listen for request at this port
app.listen(9001, function(){
	console.log('listening on localhost:9001');
});	
