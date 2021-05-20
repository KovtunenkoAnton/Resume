const router = require('express').Router()
const Candidate = require('../bd/models/candidate')
const Hr = require('../bd/models/hr')
const hbs = require('hbs')
hbs.registerHelper('sayRole', function (value) {
	if (value === 'user') {
		return true
	}
})
router
	.route('/:id')
	.get(async (req, res) => {
		// const role = req.session.userRole
		// const id = req.body.id
		res.render('profile')
	})
	.post(async (req, res) => {
		const idButton = req.body.idButton
		if (idButton === 'experienceBtn') {
			const user = await Candidate.findOne({ _id: req.params.id})
      console.log(user)
			const buttonObj = {
				workPlace: user.workPlace,
				position: user.position,
				time: user.experience.time,
				companies: user.experience.companies,
				examples: user.experience.examples,
			}
			return res.json(buttonObj)
		} else if (idButton === 'aboutSelfBtn') {
			const user = await Candidate.findOne({ _id: req.params.id})
			const buttonObj = {
				currentWorkFlow: user.aboutSelf.currentWorkFlow,
				likeToDo: user.aboutSelf.likeToDo,
				likeNotToDo: user.aboutSelf.likeNotToDo,
				achievements: user.aboutSelf.achievements,
				aboutSelfVideo: user.aboutSelfVideo,
			}
      return res.json(buttonObj)
		} else if (idButton === 'educationBtn') {
			const user = await Candidate.findOne({ _id: req.session.id})
			const buttonObj = {
        university: user.education.university,
        college: user.education.college,
        specialty: user.education.specialty,
        courses: user.education.courses,
        internships: user.education.internships,
        certificates: user.education.certificates,
        languages: user.education.languages,
        coreSkills: user.coreSkills,
        technologiesStack: user.technologiesStack,
			}
      return res.json(buttonObj)
		} else if (idButton === 'CareerExpectationsBtn') {
			const user = await Candidate.findOne({ _id: req.session.id})
			const buttonObj = {
				desiredPosition: user.desiredPosition,
        wantToDo: user.wantToDo,
        desiredSalary: user.desiredSalary,
			}
      return res.json(buttonObj)
		}
	})
module.exports = router
