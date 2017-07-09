var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
//Landing page
app.get('/', function(req, res){
  res.sendFile(__dirname + "/views/landing.html");
});

app.get('/about', function(req, res){
  var context = {
    about: 'true'
  }
  res.render('about', context);
});

app.get('/experience', function(req, res){
  var context = {
    exp: 'true'
  }
  res.render('experience', context);
});

app.get('/photography', function(req, res){
  var context = {
    photo: 'true'
  }
  res.render('photography', context);
});

app.get('/blog', function(req, res){
  var context = {
    blog: 'true'
  }
  res.render('blog', context);
});


//404 Page
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

//500 Page
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express server started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate...');
});
