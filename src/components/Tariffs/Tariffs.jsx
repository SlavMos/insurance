import { useState } from "react";
import s from "./tariffs.module.css";

const Tariffs = () => {
  // Состояние для отслеживания выбранного тарифа
  const [selectedTariff, setSelectedTariff] = useState("");

  const handleClick = (e, tariff) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    setSelectedTariff(tariff); // Устанавливаем выбранный тариф
  };

  // Данные для таблицы
  const tariffDetails = {
    GOLD: {
      price: "лимит 10.5%(от стоимости а/м)",
      benefits: "1 раз в год (Москва + 50 км)",
      validity: "15 тысяч в год",
    },
    SILVER: {
      price: "лимит 17.5%(от стоимости а/м)",
      benefits: "1 раз в год (Москва + 100 км)",
      validity: "30 тысяч в год",
    },
  };

  return (
    <section className={s.tariffs}>
      <div className={s.container}>
        <h2 className={s.title}>Тарифы</h2>
        <div className={s.items}>
          <div className={s.item}>
            <a
              className={`${s.silverButton} ${s.shineButton}`}
              href="#"
              onClick={(e) => handleClick(e, "GOLD")}
            >
              <span className={s.text}>Silver</span>
            </a>
          </div>
          <div className={s.item}>
            <a
              className={`${s.goldButton} ${s.shineButton}`}
              href="#"
              onClick={(e) => handleClick(e, "SILVER")}
            >
              <span className={s.text}>Gold</span>
            </a>
          </div>
        </div>

        {/* Отображаем таблицу в зависимости от выбранного тарифа */}
        {selectedTariff && (
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
        )}
      </div>
    </section>
  );
};

export default Tariffs;
