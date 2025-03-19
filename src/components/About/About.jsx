import s from "./about.module.css";

const About = () => {
  return (
    <section className={s.about}>
      <div className={s.container}>
        <h2 className={s.title}>Что покрывает гарантия AUTOSAFE24</h2>
        <div className={s.s}>
          <div className={s.items}>
            <div className={s.item}>
              <p>Двигатель</p>
              <p>КПП</p>
              <p>Компрессор/Турбонагнетатель</p>
              <p>Редуктор</p>
            </div>
            <div className={s.item}>
              <p>Головка блока цилиндров</p>
              <p>Генератор</p>
              <p>Радиатор кондиционера</p>
              <p>Страртер</p>
            </div>
            <div className={s.item}>
              <p>Масляный насос</p>
              <p>Помпа</p>
              <p>Кондиционер</p>
              <p>Насос гидроусилителя руля</p>
            </div>
            <div className={s.item}>
              <p>Прочие узлы и агрегаты</p>
            </div>
          </div>
          <div>
            <img
              src="/—Pngtree—porsche 911 carrera s ilustrasi_8714202.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
