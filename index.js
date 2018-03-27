var express = require('express');
var app = express();
// app.use(express.static(__dirname + '/public' ));
app.get('/',function(req,res){
		res.sendFile('index.html',{
	root:__dirname});
})

app.get('/:url',function(req,res){
	res.send('Not Valid');
});


