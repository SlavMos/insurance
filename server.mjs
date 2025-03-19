// server.js (Node.js сервер)
import express from "express";
import axios from "axios";
const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/send-message", async (req, res) => {
  const { firstName, phone, question } = req.body;

  const TOKEN = "AAH3CPluePLck6sgYi7hhz1nJA5Ys0oLqsM";
  const CHAT_ID = "239462362";
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const message = `📩 Вопрос по гарантии!\n👤 Имя: ${firstName}\n📞 Телефон: ${phone}\n❓ Вопрос: ${question}`;

  try {
    const response = await axios.post(URL, {
      chat_id: CHAT_ID,
      text: message,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка при отправке сообщения" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
