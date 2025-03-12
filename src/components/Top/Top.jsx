import s from "./top.module.css";

const Content = () => {
  return (
    <section className={s.top}>
      <div className={s.container}>
        <div className={s.topHeading}>
          <div className={s.topContent}>
            <h1 className={s.topTitle}>AUTOSAFE</h1>
            <p className={s.topText}>Гарантия вашего спокойствия</p>
            <p className={s.about}>
              Надежная защита вашего автомобиля в любых ситуациях. Мы предлагаем
              удобные и надежные страховые решения, чтобы вы могли быть уверены
              в завтрашнем дне. Оформите страховку быстро и без лишних хлопот,
              получая профессиональную поддержку на каждом этапе. AUTOSAFE — ваш
              надежный партнер на дороге!
            </p>
          </div>
          <div className={s.imageContainer}>
            <img
              src="/public/can-you-have-liability-insurance-on-a-financed-car.jpg"
              alt=""
            />
          </div>
        </div>

        <div className={s.topBottom}>
          <h2 className={s.title}>
            Гарантия на новые автомобили: ваша увереность и защита!
          </h2>

          <div className={s.topItems}>
            <div className={s.topItem}>
              <img className={s.topItemImg} src="/icons/icon1.svg" alt="icon" />
              <p className={s.topItemText}>Гарантия</p>
            </div>
            <div className={s.topItem}>
              <img className={s.topItemImg} src="/icons/icon2.svg" alt="icon" />
              <p className={s.topItemText}>Надежность</p>
            </div>
            <div className={s.topItem}>
              <img className={s.topItemImg} src="/icons/icon3.svg" alt="icon" />
              <p className={s.topItemText}>Гибкие условия</p>
            </div>
            <div className={s.topItem}>
              <img className={s.topItemImg} src="/icons/icon3.svg" alt="icon" />
              <p className={s.topItemText}>Уверенность в качестве</p>
            </div>
            <div className={s.topItem}>
              <img className={s.topItemImg} src="/icons/icon3.svg" alt="icon" />
              <p className={s.topItemText}>Дополнительные услуги</p>
            </div>
          </div>
        </div>

        <div className={s.info}>
          <div>
            <h1 className={s.titleInfo}>
              Мы ценим каждого клиента и предоставляем качественный сервис
            </h1>
            <div className={s.infoImg}>
              <img
                className={s.benefitImg}
                src="../../../public/mceclip0.jpg"
                alt=""
              />
            </div>

            <div className={s.benefits}>
              <div className={s.benefitItem}>
                <p className={s.benefitTitle}>Гарантия</p>
                <p className={s.benefitText}>
                  Защита от непредвиденных расходов в постгарантийный период
                </p>
              </div>
              <div className={s.benefitItem}>
                <p className={s.benefitTitle}>Надежность</p>
                <p className={s.benefitText}>
                  Ремонт в официальных дилерских центрах с использованием
                  оригинальных запасных частей
                </p>
              </div>
              <div className={s.benefitItem}>
                <p className={s.benefitTitle}>Гибкие условия</p>
                <p className={s.benefitText}>
                  Выбор между стандартными и расширенными вариантами гарантии
                </p>
              </div>
              <div className={s.benefitItem}>
                <p className={s.benefitTitle}>Уверенность в качестве</p>
                <p className={s.benefitText}>Знак доверия от производителя</p>
              </div>
              <div className={s.benefitItem}>
                <p className={s.benefitTitle}>Дополнительные услуги</p>
                <p className={s.benefitText}>
                  Бесплатные технические осмотры и помощь на дороге
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
