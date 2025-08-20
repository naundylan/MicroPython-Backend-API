const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use("/", routes);

// Khi chạy local thì listen
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`✅ Server running on port ${port}`));
}

// Xuất app để Vercel dùng
module.exports = app;
