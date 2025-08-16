module.exports = {
    receiveData: (req, res) => {
        const data = req.body
        console.log("Nhận dữ liệu: ", data)
        res.json({ status: 'success', received: data})
    }
}