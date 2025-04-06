const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: String,
  reason: String,
  status: {
    type: String,
    default: "Scheduled"
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
