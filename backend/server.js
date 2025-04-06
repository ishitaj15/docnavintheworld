const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI);


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Doctor Routes
const doctorRoutes = require('./routes/doctors');
app.use('/api/doctors', doctorRoutes);

//Hospital Routes
const hospitalRoutes = require('./routes/hospitals');
app.use('/api/hospitals', hospitalRoutes);

const patientRoutes = require('./routes/patients');
app.use('/api/patients', patientRoutes);

const appointmentRoutes = require('./routes/appointments');
app.use('/api/appointments', appointmentRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
