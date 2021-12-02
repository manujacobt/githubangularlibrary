require('dotenv/config');
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
var bodyParser = require('body-parser')

const methodoverride = require('method-override');
const booksRouter = require('./src/routes/bookRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const adminRouter = require('./src/routes/adminroutes');
const admin1Router = require('./src/routes/admin1routes');
const authorRouter = require('./src/routes/authorroutes');


var fs = require('fs');
var path = require('path');

var mongoose = require('mongoose')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'ssshhhhh', resave: true, saveUninitialized: true }));
app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'))


app.set('views', './src/views');
app.use(methodoverride('_method'));
app.use('/books', booksRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/addbook', adminRouter);
app.use('/addauthor', admin1Router);
app.use('/authors', authorRouter);




app.listen(3000, function(){
  
  console.log('listening to port 3000');
});
