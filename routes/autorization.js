const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Candidate = require('../bd/models/candidate');
const Hr = require('../bd/models/hr');

router
  .route('/')
  .get((req, res) => {
    res.redirect('/login');
  });

router
  .route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    const { email, password } = req.body;

    try {
      let user = await Candidate.findOne({ email });
      if (user && user.role === 'candidate' && (await bcrypt.compare(password, user.password))) {
        req.session.userId = user._id;
        req.session.userRole = user.role;
        return res.json({
          isInBase: true,
          userId: user._id,
        });
      } else {
        let user = await Hr.findOne({ email });
        if (user && user.role === 'hr' && (await bcrypt.compare(password, user.password))) {
          req.session.userId = user._id;
          req.session.userRole = user.role;
          return res.json({
            isInBase: true,
            userId: user._id,
          });
        } else {
          return res.json({ isInBase: false });
        }
      }
    } catch (e) {
      console.log(e);
    }

  });

router
  .route('/registration')
  .get((req, res) => {
    res.render('registration');
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      if (await Candidate.findOne({ email }) || await Hr.findOne({ email })) res.redirect('/login');
      else {
        const hash = await bcrypt.hash(password, 10);
        let role;
        if (req.body.hr) {
          role = 'hr'
          await Hr.create({ email: email, password: hash, role: role, contacts: { email: email } });
          const user = await Hr.findOne({ email });
          const id = user._id;
          req.session.userId = id;
          req.session.userRole = role;
          res.redirect(`/profile/${id}`);

        } else {
          role = 'candidate'
          await Candidate.create({ email: email, password: hash, role: role, contacts: { email: email } });
          const user = await Candidate.findOne({ email });
          const id = user._id;
          req.session.userId = id;
          req.session.userRrole = role;
          res.redirect(`/profile/${id}`);
        }

      }
    } catch (e) {
      console.log(e);
    }

  })




module.exports = router;
