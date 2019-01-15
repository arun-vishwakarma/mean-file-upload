const http = require('http');
const fs = require('fs');
//const body_parser = require('body-parser');
const server = http.createServer((req, res) => {
	if(req.url==='/'){
		//console.log('Request get');
		var file = fs.readFile('./index.html',(err,html) => {
			if(err){
				console.log('error',err);
				//throw err;
			}
			res.writeHead(200,{'content-type':'text/html'});
			res.write(html);
			res.end();		
			//res.end('flie loaded');		
		});	
			
	}
	
	if(req.url==='/save'){
		console.log(req);
	}
	
}).listen(3000,() => console.log('Example app listening on port 3000!'));


/* const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'));  //to render text
//or 
app.get('/', (req, res) => res.sendFile('index.html'));  //to render file


app.listen(3000, () => console.log('Example app listening on port 3000!')); */

