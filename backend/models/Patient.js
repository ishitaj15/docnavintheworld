const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  gender: String,
  contact: String,
  email: String,
  medicalHistory: [String]
});

module.exports = mongoose.model('Patient', patientSchema);
