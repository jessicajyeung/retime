/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var add = require('./routes/add.js');
var index = require('./routes/index');
var home = require('./routes/home');
var createNewTask = require('./routes/createNewTask');
var profile = require('./routes/profile');
var task = require('./routes/task');
var settings = require('./routes/settings');
var signup = require('./routes/signup');
var submit_new_task = require('./routes/submit_new_task');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/add',index.view, home.view, createNewTask.view,task.view,profile.view,settings.view)
app.get('/', index.view);
app.get('/home', home.view);
// app.get('/grid', home.viewGrid);
app.get('/createNewTask', createNewTask.view);
app.get('/task', task.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/signup', signup.view);
app.get('/submit_new_task', submit_new_task.view);



// Example route
// app.get('/users', user.list);

app.use(express.static('public/'));
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
