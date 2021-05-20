const express = require('express');
const router = express.Router();
const Candidate = require('../bd/models/candidate');
const Hr = require('../bd/models/hr');

router
  .route('/')
  .get(async(req, res) => {
    // console.log('=====>>>>');
    // console.log(' req.session.userId ==>',req.session.userId);
    const user = await Candidate.findById(req.session.userId); //Проверить!!!
    // console.log(user);
    const firstName = user.firstName;
    const lastName = user.lastName;
    const patronymic = user.patronymic;
    const birthday = user.birthday;
    const residence = user.residence;
    const phone = user.phone;
    const workPlace = user.workPlace;
    const position = user.position;
    const university = user.university;
    const college = user.college;
    const specialty = user.specialty;
    const courses = user.courses;
    const internships = user.internships;
    const certificates = user.certificates;
    const languages = user.languages;
    const coreSkills = user.coreSkills;
    const technologiesStack = user.technologiesStack;
    const desiredPosition = user.desiredPosition;
    const desiredSalary = user.desiredSalary;
    const wantToDo = user.wantToDo;
    const time = user.time;
    const companies = user.companies;
    const examples = user.examples;
    const currentWorkFlow = user.currentWorkFlow;
    const likeToDo = user.likeToDo;
    const likeNotToDo = user.likeNotToDo;
    const achievements = user.achievements;

    req.session.lastName = lastName;
    req.session.userFirstName = firstName;
    req.session.patronymic = patronymic;
    req.session.birthday = birthday;
    req.session.residence = residence;
    req.session.phone = phone;
    req.session.workPlace = workPlace;
    req.session.position = position;
    req.session.university = university;
    req.session.college = college;
    req.session.specialty = specialty;
    req.session.courses = courses;
    req.session.internships = internships;
    req.session.certificates = certificates;
    req.session.languages = languages;
    req.session.coreSkills = coreSkills;
    req.session.technologiesStack = technologiesStack;
    req.session.desiredPosition = desiredPosition;
    req.session.desiredSalary = desiredSalary;
    req.session.wantToDo = wantToDo;
    req.session.time = time;
    req.session.companies = companies;
    req.session.examples = examples;
    req.session.currentWorkFlow = currentWorkFlow;
    req.session.likeToDo = likeToDo;
    req.session.likeNotToDo = likeNotToDo;
    req.session.achievements = achievements;
    res.render('editProfile');
  })
  .post(async(req, res) => {
    console.log(req.body)
    const user = await Candidate.findById(req.session.userId);
    user.data.firstName = req.body.firstName;
    user.data.lastName = req.body.lastName;
    user.data.patronymic = req.body.patronymic;
    user.data.birthday = req.body.birthday;
    user.data.residence = req.body.residence;
    user.phone = req.body.number;
    user.aboutSelf.likeToDo = req.body.likeToDo;
    user.aboutSelf.likeNotToDo = req.body.likeNotToDo;
    user.workPlace = req.body.workPlace;
    user.job.position = req.body.position;
    user.desiredPosition = req.body.desiredPosition;
    user.desiredSalary = req.body.desiredSalary;
    user.wantToDo = req.body.wantToDo;
    user.experience.time = req.body.time;
    user.experience.companies = req.body.companies;
    user.experience.examples = req.body.examples;
    user.aboutSelf.currentWorkFlow = req.body.currentWorkFlow;
    user.education.university = req.body.university;
    user.education.college = req.body.college;
    user.education.specialty = req.body.specialty;
    user.education.courses = req.body.courses;
    user.education.internships = req.body.internships;
    user.education.certificates = req.body.certificates;
    user.education.languages = req.body.languages;
    user.coreSkills = req.body.coreSkills;
    user.technologiesStack = req.body.technologiesStack;
    await user.save();
    res.status(200).send();
  });
  module.exports = router;
 
