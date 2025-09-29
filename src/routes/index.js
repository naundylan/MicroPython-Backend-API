const express = require("express");
const router = express.Router();

const InfoController = require('../controllers/InfoController');

router.get("/", (req, res) => {
  res.json({ message: "Hello from Vercel + Express 🚀" });
});

router.get('/api', (req, res) => {
  res.send('API endpoint is working');
});

router.get('/api/data', (req, res) => {
  res.json({ message: "This is the data endpoint" });
  
});

router.post('/api/data', InfoController.receiveData);

module.exports = router;
