const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

console.log("✅ doctor routes loaded");

router.get('/test', (req, res) => {
    res.send("✅ Doctor route is working!");
  });
  
// @route   GET /api/doctors
// @desc    Get all doctors

router.get('/', async (req, res) => {
    console.log("GET /api/doctors hit");
    try {
      const doctors = await Doctor.find();
      res.json(doctors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


// @route   POST /api/doctors
// @desc    Add a new doctor
router.post('/', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;
