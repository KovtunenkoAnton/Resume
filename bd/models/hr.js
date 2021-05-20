const { model, Schema } = require('mongoose')

const hrSchema = new Schema({
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
    name: {
      firstName: String,
      lastName: String,
      patronymic: String,
    },
    birthday: Date,
    residence: String,
  },
  contacts: {
    phone: Number,
    email: {
      type: String,
      required: true,
    },
  },
  organisation: {
    name: String,
    adress: String,

  }
});

module.exports = model('HR', hrSchema)
