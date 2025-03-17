import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__inner}>
          <a href="#" className={s.logo}>
            <img src="/vite.svg" alt="logo" />
          </a>
          <nav className={s.menu}>
            <ul className={s.menu__List}>
              <li className={s.menu__item}>
                <a href="#" className={s.menu__listLink}>
                  О НАС
                </a>
              </li>

              <li className={s.menu__item}>
                <a href="#" className={s.menu__listLink}>
                  ОТЗЫВЫ
                </a>
              </li>
              <li className={s.menu__item}>
                <a href="#" className={s.menu__listLink}>
                  ТАРИФЫ
                </a>
              </li>
              <li className={s.menu__item}>
                <a href="#" className={s.menu__listLink}>
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </nav>
          <a href="tel:+38(099)9999090" className={s.phone}>
            +38 (099) 999 90 90
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
