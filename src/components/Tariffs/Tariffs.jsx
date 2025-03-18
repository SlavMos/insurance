import { useState } from "react";
import s from "./tariffs.module.css";
import Modal from "react-modal";

const Tariffs = () => {
  // Состояние для отслеживания выбранного тарифа
  // const [selectedTariff, setSelectedTariff] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal2 = () => setModalIsOpen2(true);
  const closeModal2 = () => setModalIsOpen2(false);

  const modalContent = (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <table className={s.tariffTable}>
          <tr>
            <td>Название</td>
            <td>Оригинальное название</td>
            <td>Год</td>
          </tr>
          <tr>
            <td>Человек-паук: Возвращение домой</td>
            <td>Spider-Man: Homecoming</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Человек-паук: Вдали от дома</td>
            <td>Spider-Man: Far From Home</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Человек-паук: Нет пути домой</td>
            <td>Spider-Man: No Way Home</td>
            <td>2021</td>
          </tr>
        </table>
        <button className={s.modalButton} onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
  const modalContent2 = (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <table className={s.tariffTable}>
          <tr>
            <td>Название</td>
            <td>Оригинальное название</td>
            <td>Год</td>
          </tr>
          <tr>
            <td>Человек-паук: Возвращение домой</td>
            <td>Spider-Man: Homecoming</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Человек-паук: Вдали от дома</td>
            <td>Spider-Man: Far From Home</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Человек-паук: Нет пути домой</td>
            <td>Spider-Man: No Way Home</td>
            <td>2021</td>
          </tr>
        </table>
        <button className={s.modalButton} onClick={closeModal2}>
          Закрыть
        </button>
      </div>
    </div>
  );

  return (
    <section className={s.tariffs}>
      <div className={s.container}>
        <h2 className={s.title}>Тарифы гарантии AUTOSAFE24 </h2>
        <div className={s.items}>
          <div className={`${s.item} ${s.card}`}>
            <h2 className={s.title}>Тариф на новые автомобили</h2>
            <p className={s.text}>Gold</p>
            <button className={s.button} onClick={openModal}>
              <span className={s.info}>Узнать поподробнее о тарифе</span>
            </button>
            <Modal
              closeTimeoutMS={200}
              overlayClassName={s.overlay}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 10,
                },
                content: {
                  border: "none",
                  background: "transparent",
                  padding: "0",
                  zIndex: 10,
                },
              }}
            >
              {modalContent}
            </Modal>
            <p className={s.text}>Silver</p>
            <button className={s.button} onClick={openModal}>
              <span className={s.info}>Узнать поподробнее о тарифе</span>
            </button>
            <Modal
              closeTimeoutMS={200}
              overlayClassName={s.overlay}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 10,
                },
                content: {
                  border: "none",
                  background: "transparent",
                  padding: "0",
                  zIndex: 10,
                },
              }}
            >
              {modalContent}
            </Modal>
          </div>
          <div className={`${s.item} ${s.card}`}>
            <h2 className={s.title}>Тариф на Б/У автомобили </h2>
            <p className={s.text}>Gold</p>

            <button className={s.button} onClick={openModal2}>
              <span className={s.info}>Узнать поподробнее о тарифе</span>
            </button>
            <Modal
              closeTimeoutMS={200}
              overlayClassName={s.overlay}
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 10,
                },
                content: {
                  border: "none",
                  background: "transparent",
                  padding: "0",
                  zIndex: 10,
                },
              }}
            >
              {modalContent2}
            </Modal>
            <p className={s.text}>Silver</p>
            <button className={s.button} onClick={openModal2}>
              <span className={s.info}>Узнать поподробнее о тарифе</span>
            </button>
            <Modal
              closeTimeoutMS={200}
              overlayClassName={s.overlay}
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  zIndex: 10,
                },
                content: {
                  border: "none",
                  background: "transparent",
                  padding: "0",
                  zIndex: 10,
                },
              }}
            >
              {modalContent2}
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
