import s from "./question.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Question = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className={s.questions}>
      {" "}
      <div className={s.container}>
        <div className={s.question}>
          <div>
            <h1 className={s.title}>Вопросы по действующей гарантии?</h1>
            <p className={s.text}>
              Оставьте заявку и мы перезвоним вам в ближайшее время
            </p>
          </div>
          <div>
            <button onClick={() => setIsModalOpen(true)} className={s.button}>
              Задать вопрос
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
