module.exports = {
    receiveData: (req, res) => {
        const data = req.body;
        console.log("Nhận dữ liệu: ", data);

        // Emit dữ liệu realtime qua socket.io
        const io = req.app.get("io");
        io.emit("new-data", data);

        res.json({ status: 'success', received: data });
    }
}