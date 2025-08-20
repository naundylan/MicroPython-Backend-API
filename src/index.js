const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const routes = require("./routes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use("/", routes);

// Cho phép controller truy cập io
app.set("io", io);

// Khi chạy local thì listen
if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`✅ Server running on port ${port}`));
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

// Xuất app để Vercel dùng
module.exports = app;
