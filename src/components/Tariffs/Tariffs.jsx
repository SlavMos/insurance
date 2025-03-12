import s from "./tariffs.module.css";

const Tariffs = () => {
  return (
    <div className={s.tariffs}>
      <h2 className={s.title}>Тарифы</h2>
      <div className={s.tables}>
        <table>
          <tr>
            <td>Наименование услуг</td>
            <td>Silver</td>
            <td>Gold</td>
          </tr>
          <tr>
            <td>
              Гарантия на новые автомобили на основные части узлов и агрегатов{" "}
            </td>
            <td>лимит 10.05 %</td>
            <td>лимит 17.5%</td>
          </tr>
          <tr>
            <td>Прайс за 12 месяцев от стоимости ТС</td>
            <td>2%</td>
            <td>3.5%</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Tariffs;
