const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const Mongostore = require('connect-mongo');
const morgan = require('morgan');
const path = require('path');
const middleware = require('./middleware/middleware');

const profileRouter = require('./routes/profile')
const autorizationRoutre = require('./routes/autorization');
const allResumeRoutre = require('./routes/allResume');
const allHrRoutre = require('./routes/allHr');
const editRoutre = require('./routes/editProfile');

const app = express();


middleware(app);

app.use('/profile', profileRouter)
app.use('/', autorizationRoutre);
app.use('/allresume', allResumeRoutre);
app.use('/allhr', allHrRoutre);
app.use('/editprofile', editRoutre);

app.listen(3000, () => {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.2igkd.mongodb.net/Resume-Constructor?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      console.log('db connect');
    });
});
