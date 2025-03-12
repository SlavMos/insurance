import s from "./contact.module.css";

const Contact = () => {
  return (
    <div className={s.contact}>
      <div className={s.container}>
        <div className={s.inner}>
          <img src="../../../public/Rectangle 35.png" alt="" />
          <div>
            <h3 className={s.title}>Остались вопросы?</h3>
            <p className={s.text}>Звоните по указанному номеру</p>
            <a href="tel:+38(099)9999090" className={s.phone}>
              +38 (099) 999 90 90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
