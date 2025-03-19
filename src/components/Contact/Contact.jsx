import s from "./contact.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={s.contact}>
      <div className={s.container}>
        <div className={s.inner}>
          <img src="/Rectangle 35.png" alt="" />

          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h3 className={s.title}>J?</h3>
            <button onClick={() => setIsModalOpen(true)} className={s.button}>
              Задать вопрос
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
