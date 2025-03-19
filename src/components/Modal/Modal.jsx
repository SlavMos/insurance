import { useState } from "react";
import s from "./modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");

  const sendQuestion = async () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !question.trim()
    ) {
      setError("Заполните все поля!");
      return;
    }

    setError(""); // Очистка ошибки

    const TOKEN = "7541896677:AAH3CPluePLck6sgYi7hhz1nJA5Ys0oLqsM"; // Замени на свой токен
    const CHAT_ID = "239462362"; // Замени на свой chat_id
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `📩 Новый вопрос!\n👤 Имя: ${firstName} ${lastName}\n📞 Телефон: ${phone}\n❓ Вопрос: ${question}`;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      if (response.ok) {
        setFirstName("");
        setLastName("");
        setPhone("");
        setQuestion("");
        onClose();
      } else {
        setError("Ошибка отправки. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setError("Ошибка соединения. Проверьте интернет.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <h1 className={s.title}> Вопрос по гарантии</h1>
        <h2>
          Напишите свой вопрос и наш менеджер свяжется с Вами в течение 5 минут
          в рабочее время
        </h2>

        {error && <p className={s.error}>{error}</p>}

        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Введите ваше имя"
          className={s.input}
        />

        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Введите вашу фамилию"
          className={s.input}
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Введите ваш номер телефона"
          className={s.input}
        />

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Напишите ваш вопрос..."
          className={s.textarea}
        ></textarea>

        <div className={s.modalButtons}>
          <button onClick={onClose} className={`${s.btn} ${s.btnClose}`}>
            Закрыть
          </button>
          <button onClick={sendQuestion} className={`${s.btn} ${s.btnSend}`}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
