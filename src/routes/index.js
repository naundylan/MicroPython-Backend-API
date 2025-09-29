const express = require("express");
const router = express.Router();

const InfoController = require('../controllers/InfoController');

router.get("/", (req, res) => {
  res.json({ message: "Hello from Vercel + Express 🚀" });
});

router.get('/api', (req, res) => {
  res.send('API endpoint is working');
});


let sensorData = []
router.post('/api/data', (req, res) => {
  const data = req.body;
  sensorData.push({ ...data, time: new Date() });
  console.log("Nhận dữ liệu: ", data);
  
  // Emit dữ liệu realtime qua socket.io
  const io = req.app.get("io");
  io.emit("new-data", data);
  
  res.json({ status: 'success', received: data });
});

router.get('/api/data', (req, res) => {
  res.json(sensorData);
});

module.exports = router;
