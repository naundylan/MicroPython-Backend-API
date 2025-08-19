// api/info.js
export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body; // dữ liệu JSON từ ESP gửi lên
      console.log("📩 Nhận dữ liệu từ ESP8266:", data);

      return res.status(200).json({
        message: "Dữ liệu đã nhận thành công",
        received: data
      });
    } catch (error) {
      return res.status(500).json({ error: "Xử lý thất bại", detail: error.message });
    }
  }

  // Nếu không phải POST → báo lỗi
  return res.status(405).json({ error: "Chỉ hỗ trợ POST" });
}
