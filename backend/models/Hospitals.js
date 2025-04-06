const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  contact: String,
  departments: [String]
});

module.exports = mongoose.model('Hospital', hospitalSchema);
