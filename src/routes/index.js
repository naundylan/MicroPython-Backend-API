const express = require('express')
const router = express.Router()

const InfoController = require('../controllers/InfoController')

// router test
router.get('/', (req, res) => {
    res.json({ message: 'API root' })
})

// Route nhận dữ liệu từ Micropython
router.post('/data', InfoController.receiveData);

module.exports = router