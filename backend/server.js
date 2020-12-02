const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')


// var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors=require('cors');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var testAPIRouter=require('./routes/testAPI');
const models = require('./models');

const dbPORT=5432;

const app = express();
const port=5000;      
app.use(bodyParser.json())

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use('/',require('./routes')); //localhost:5000/......

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/testAPI',testAPIRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// To check the connection of database
models.sequelize.sync().then(function(){
  app.listen(dbPORT,function(){
    console.log("==> , PORT",dbPORT);

  })
})
.catch(err =>{
  console.error('Unable to connect to the database',err);
});
// //Updating like table(sample)
// const like = models.likes.build({
//   like:678
// });
//Saving the updation
// like.save().then(function(newLike){
//   console.log(newLike);
// });
// //Displaying the contents of like table
// models.likes.findOne().then(function(likes){
//   console.log(likes);
// });

// models.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("==> , PORT", PORT);
//   })
//   })
//   .catch(err => {
//   console.error('Unable to connect to the database ', err);
//   });
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
module.exports = app;
