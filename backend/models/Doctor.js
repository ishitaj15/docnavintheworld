const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  hospital: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  image: {
    type: String, // URL to profile image
    default: ''
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);
