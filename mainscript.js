var http=require('http');
var fs=require('fs');
var exp=require('express');
var app=exp();
app.use('/Fonts',express.static('Fonts'));
var server = http.createServer(function(req,res){
	console.log('requested by: '+req.url);
	if((req.url==='/home')||(req.url==='/')||(req.url==='/home.htm'))
	{
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/home.htm','utf8').pipe(res);
	}
	else if((req.url==='/contacts')||(req.url==='/contacts.htm')||(req.url==='/contact'))
	{
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/contacts.htm','utf8').pipe(res);
	}
	else if((req.url==='/login')||(req.url==='/login.htm'))
	{
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/login.htm','utf8').pipe(res);
	}
	else if((req.url==='/about')||(req.url==='/about.htm'))
	{
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/about.htm','utf8').pipe(res);
	}
	else if((req.url==='/gallery')||(req.url==='/gallery.htm'))
	{
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/gallery.htm','utf8').pipe(res);
	}
	else
	{
		res.writeHead(404,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/notfound.htm','utf8').pipe(res);
	}
});
server.listen(3000,'127.0.0.1');
console.log('Listening!');
