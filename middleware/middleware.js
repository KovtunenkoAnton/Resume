const express = require('express');
const session = require('express-session');
const Mongostore = require('connect-mongo');
const morgan = require('morgan');
const path = require('path');

function middleware(app) {
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  app.use(morgan('dev'));

  //app.use(express.static('public'));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    session({
      secret: 'wkdj23867bkn08-02ejds',
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false },
      store: Mongostore.create({ mongoUrl: 'mongodb+srv://admin:admin@cluster0.2igkd.mongodb.net/Resume-Constructor?retryWrites=true&w=majority' }),
    })
  );

  app.use((req, res, next) => {
    res.locals.userId = req.session.userId;

    res.locals.userRole = req.session.userRole
    if (req.session.userRole === 'candidate') {
      res.locals.isUser = true
    } else if (req.session.userRole === 'hr') {
      res.locals.isUser = false
    }
    if (req.session.userRole === 'candidate') {
      res.locals.isHr = true
    } else if (req.session.userRole === 'hr') {
      res.locals.isHr = false
    }

    res.locals.userRole = req.session.userRole;
    res.locals.userFirstName = req.session.userFirstName;
    res.locals.lastName = req.session.lastName;
    res.locals.patronymic = req.session.patronymic;
    res.locals.birthday = req.session.birthday;
    res.locals.residence = req.session.residence;
    res.locals.phone = req.session.phone;
    res.locals.workPlace = req.session.workPlace;
    res.locals.position = req.session.position;
    res.locals.university = req.session.university;
    res.locals.college = req.session.college;
    res.locals.specialty = req.session.specialty;
    res.locals.courses = req.session.courses;
    res.locals.internships = req.session.internships;
    res.locals.certificates = req.session.certificates;
    res.locals.languages = req.session.languages;
    res.locals.coreSkills = req.session.coreSkills;
    res.locals.technologiesStack = req.session.technologiesStack;
    res.locals.desiredPosition = req.session.desiredPosition;
    res.locals.desiredSalary = req.session.desiredSalary;
    res.locals.wantToDo = req.session.wantToDo;
    res.locals.time = req.session.time;
    res.locals.companies = req.session.companies;
    res.locals.examples = req.session.examples;
    res.locals.currentWorkFlow = req.session.currentWorkFlow;
    res.locals.likeToDo = req.session.likeToDo;
    res.locals.likeNotToDo = req.session.likeNotToDo;
    res.locals.achievements = req.session.achievements;
    
    next();
  });

}

module.exports = middleware;
