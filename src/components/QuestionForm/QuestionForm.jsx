import { useState } from "react";
import s from "./form.module.css"; // Новый CSS

const QuestionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const sendQuestion = async () => {
    if (!firstName.trim() || !phone.trim() || !lastName.trim()) {
      setError("Заполните все поля!");
      return;
    }

    setError("");

    const TOKEN = "7541896677:AAH3CPluePLck6sgYi7hhz1nJA5Ys0oLqsM"; // Используй свой токен
    const CHAT_ID = "239462362"; // Используй свой chat_id
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `📩 Вопрос по гарантии!\n👤 Имя: ${firstName} \n📞 Телефон: ${phone}\n❓ `;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      if (response.ok) {
        console.log("Сообщение успешно отправлено!");
        setFirstName("");
        setLastName("");
        setPhone("");
      } else {
        setError("Ошибка отправки. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setError("Ошибка соединения. Проверьте интернет.");
    }
  };

  return (
    <div className={s.container}>
      <h1>Оформи гарантию на автомобиль</h1>

      {error && <p className={s.error}>{error}</p>}

      <div className={s.form}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Имя"
          maxLength={500} // Ограничение побольше
          className={s.input}
        />

        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Фамилия"
          className={s.input}
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон"
          className={s.input}
        />

        {/* <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ваш вопрос"
          className={s.textarea}
        ></textarea> */}

        <button onClick={sendQuestion} className={s.button}>
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
