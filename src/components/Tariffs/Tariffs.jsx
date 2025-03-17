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

  // const handleClick = (e, tariff) => {
  //   e.preventDefault(); // Предотвращаем переход по ссылке
  //   setSelectedTariff(tariff); // Устанавливаем выбранный тариф
  // };

  // Данные для таблицы
  // const tariffDetails = {
  //   GOLD: {
  //     price: "лимит 10.5%(от стоимости а/м)",
  //     benefits: "1 раз в год (Москва + 50 км)",
  //     validity: "15 тысяч в год",
  //   },
  //   SILVER: {
  //     price: "лимит 17.5%(от стоимости а/м)",
  //     benefits: "1 раз в год (Москва + 100 км)",
  //     validity: "30 тысяч в год",
  //   },
  // };

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
        <h2 className={s.title}>Тарифы</h2>
        <div className={s.items}>
          <div className={s.item}>
            <button
              className={`${s.silverButton} ${s.shineButton}`}
              href="#"
              onClick={openModal}
            >
              <span className={s.text}>Silver</span>
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
          <div className={s.item}>
            <button
              className={`${s.goldButton} ${s.shineButton}`}
              href="#"
              onClick={openModal2}
            >
              <span className={s.text}>Gold</span>
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

        {/* Отображаем таблицу в зависимости от выбранного тарифа */}
        {/* {selectedTariff && (
          <div className={s.selectedTable}>
            <table className={s.tariffTable}>
              <thead>
                <tr>
                  <th>Наименование услуг</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Гарантия на новые автомобили на основные части узлов и
                    агрегатов
                  </td>
                  <td>{tariffDetails[selectedTariff].price}</td>
                </tr>
                <tr>
                  <td>Эвакуация</td>
                  <td>{tariffDetails[selectedTariff].benefits}</td>
                </tr>
                <tr>
                  <td>Ограничение по пробегу в год</td>
                  <td>{tariffDetails[selectedTariff].validity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Tariffs;
