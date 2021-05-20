const { Schema, model, pluralize } = require('mongoose');
const candidateSchema =  new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: String,
  data: {
      firstName: String,
      lastName: String,
      patronymic: String,
    birthday: Date,
    residence: String,
  },
  contacts: {
    phone: Number, 
    email:  {
      type: String,
    },
  },
  job: {
    workPlace: String,
    position: String,
  },
  education: {
    university: String,
    college: String,
    specialty: String,
    courses: [],
    internships: [],
    certificates: [],
    languages: [],
  },
  coreSkills: [],
  technologiesStack: [],
  desiredPosition: String,
  desiredSalary: Number,
  wantToDo: String,
  experience: {
    time: Number,
    companies: [],
    examples: [],
  },
  aboutSelf: {
    currentWorkFlow: String,
    likeToDo: String,
    likeNotToDo: String,
    achievements: [],
  },
  aboutSelfVideo: {
  }
});

module.exports = model('candidate', candidateSchema)


