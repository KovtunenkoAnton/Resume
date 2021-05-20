const express = require('express');
const router = express.Router();
const Candidate = require('../bd/models/candidate');
const Hr = require('../bd/models/hr');

router.route('/')
.get(async(req, res) => {
  const listHr = await Hr.find();
  res.render('allHr', { listHr });
});

module.exports = router;
