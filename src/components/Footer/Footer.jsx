import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.logo}>LOGO</div>

          <nav className={s.nav}>
            <a href="#">Главная</a>
            <a href="#">О нас</a>
            <a href="#">Услуги</a>
            <a href="#">Контакты</a>
          </nav>

          <div className={s.contact}>
            <p>📍 Москва, ул. Примерная, 1</p>
            <p>📞 +7 (999) 123-45-67</p>
            <p>✉ support@example.com</p>
          </div>
        </div>

        <div className={s.bottom}>
          <p>© 2025 Все права защищены</p>
          <div className={s.socials}>
            <a href="#" className="icon">
              🔵
            </a>
            <a href="#" className="icon">
              🔴
            </a>
            <a href="#" className="icon">
              🟣
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
