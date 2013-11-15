
var express = require('express');
var app = express();

app.configure(function(){
  app.use('/html5', express.static('App/'));
});

app.get('/data/hello', function(req, res){
  var body = '{"message":"Hello pippo"}';
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(3000);
console.log('Listening on port 3000');
