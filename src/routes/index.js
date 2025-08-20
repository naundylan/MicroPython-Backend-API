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
  res.send('api/data is working');
});

router.post('/api/data', InfoController.receiveData);

module.exports = router;
