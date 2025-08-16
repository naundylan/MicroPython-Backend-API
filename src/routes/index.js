const express = require("express");
const router = express.Router();

// Route test
router.get("/data", (req, res) => {
  res.json({ message: "Hello from backend API 🎉" });
});

// Route nhận dữ liệu (POST từ ESP hoặc client)
router.post("/data", (req, res) => {
  console.log("Dữ liệu nhận:", req.body);
  res.json({ success: true, data: req.body });
});

module.exports = router;
