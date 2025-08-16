// src/index.js
const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes')

// middleware
app.use(express.json())

// route
app.get('/', (req, res) => {
    res.send("Đây là trang chủ nha!")
})

app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});