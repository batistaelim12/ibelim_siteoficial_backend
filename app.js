var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var http = require('http');
var connection  = require('express-myconnection');
var mysql = require('mysql');
var session = require('express-session');
var engine  = require( 'ejs-locals' );
var app = express();

app.set('token', 'R2xhY2llbGxlR2FyY2lhU2l0ZU1LVENvbnRldWRv');

app.set('port', 4300);
app.set('serverip', process.env.NODE_IP || '127.0.0.1');

// view engine setup
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(multer({ dest: './public/uploads/'}))
app.use(cookieParser('SiteOficialBatistaElim'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'SiteOficialBatistaElim',
	resave: false,
	saveUninitialized: true,
}));
app.use(allowCrossDomain);
app.use(function(req, res, next){
  var err = req.session.error
    , msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

if (app.get('env') === 'development') {
	app.set('appUrlBase', 'http://localhost:4300');
}
else{
	app.set('appUrlBase', 'http://midia.batistaelim.com.br');
}

var mysqlUser = 'root';
var mysqlPass = '1234';

var mysqlHost = 'localhost';
var mysqlPort = 3306;

app.use(
    connection(mysql,{
        host: mysqlHost,
        user: mysqlUser,
        password : mysqlPass,
        port : mysqlPort, //port mysql
        database:'ibelim_site'
    },'request')
);

var load = require('express-load');

load('dao')
  .then('models')
  .then('controllers')
  .then('routes')
  .into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
	  //res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
http.createServer(app).listen(app.get('port'), app.get('serverip'), function(){
	  console.log( "Listening on " + app.get('serverip') + ", server_port " + app.get('port') )
	});
