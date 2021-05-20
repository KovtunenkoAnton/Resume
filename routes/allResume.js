const express = require('express');
const router = express.Router();
const Candidate = require('../bd/models/candidate');
const Hr = require('../bd/models/hr');

router.route('/')
.get(async(req, res) => {
  const listCandidates = await Candidate.find();
  res.render('allResume', { listCandidates });
});

module.exports = router;
