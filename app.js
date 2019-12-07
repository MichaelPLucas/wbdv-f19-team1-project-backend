var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose')

require('dotenv').config();

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var userRouter = require('./routes/user');
const eventRouter = require('./routes/event')

var app = express();

var username = process.env.USERNAME;
var password = process.env.PASSWORD;
var url = 'ds053597.mlab.com:53597'
var schema = 'heroku_l8q5pg2q'

console.log('mongodb://'+username+':'+password+'@'+url+'/'+schema)
mongoose.connect('mongodb://'+username+':'+password+'@'+url+'/'+schema, {useNewUrlParser: true});

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', userRouter);
app.use('/events', eventRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
