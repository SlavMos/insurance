import s from "./top.module.css";

const Content = () => {
  return (
    <section className={s.top}>
      <div className={s.container}>
        <div className={s.topHeading}>
          <div className={s.gradient}>
            <div className={s.topContent}>
              <h1 className={s.topTitle}>AUTOSAFE</h1>
              <p className={s.topText}>Гарантия вашего спокойствия</p>
              <p className={s.about}>
                Надежная защита вашего автомобиля в любых ситуациях. Мы
                предлагаем удобные и надежные страховые решения, чтобы вы могли
                быть уверены в завтрашнем дне. Оформите страховку быстро и без
                лишних хлопот, получая профессиональную поддержку на каждом
                этапе. AUTOSAFE — ваш надежный партнер на дороге!
              </p>
            </div>
            <div className={s.img}>
              <img className={s.image} src="/porshe.avif" alt="" />
            </div>
          </div>
          {/* <div>
            <div className={s.car}></div>
            <p className={s.text}>AUTOSAFE 24</p>
          </div> */}
        </div>

        <div className={s.items}>
          <div className={s.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 60 60"
              fill="none"
            >
              <circle cx="30" cy="30" r="30" fill="#37a607"></circle>
              <path
                d="M29.4535 13C27.0474 13 25.0898 14.9575 25.0898 17.3636C25.0898 19.7697 27.0474 21.7273 29.4535 21.7273C31.8596 21.7273 33.8171 19.7697 33.8171 17.3636C33.8171 14.9575 31.8596 13 29.4535 13ZM29.4535 19.5455C28.2504 19.5455 27.2717 18.5667 27.2717 17.3636C27.2717 16.1606 28.2504 15.1818 29.4535 15.1818C30.6565 15.1818 31.6353 16.1606 31.6353 17.3636C31.6353 18.5667 30.6565 19.5455 29.4535 19.5455Z"
                fill="black"
              ></path>
              <path
                d="M19.6062 32.6987C20.2063 32.6987 20.6928 32.2122 20.6928 31.612C20.6928 31.0119 20.2063 30.5254 19.6062 30.5254C19.006 30.5254 18.5195 31.0119 18.5195 31.612C18.5195 32.2122 19.006 32.6987 19.6062 32.6987Z"
                fill="black"
              ></path>
              <path
                d="M47.916 27.4615C47.3174 27.4615 46.832 27.9437 46.832 28.5385V29.6154C46.832 30.3351 46.4721 31.0045 45.8692 31.4062C45.5651 31.6088 44.9816 31.8822 44.1996 31.7229C42.7653 26.7798 38.1711 23.1538 32.7402 23.1538L25.4976 23.1681C25.1962 23.1681 24.9126 23.0291 24.7195 22.8117C23.6971 21.6604 22.2218 21 20.6719 21H17.4199C17.0874 21 16.7733 21.1516 16.5678 21.4113C16.3622 21.671 16.2881 22.01 16.3665 22.3311L17.4642 26.8226C16.6621 27.6562 15.9935 28.5917 15.468 29.6155H15.252C13.4588 29.6155 12 31.0648 12 32.8462V36.0382C12 37.0861 12.5144 38.0727 13.3761 38.6772L15.2879 40.0185C15.9587 41.444 16.8959 42.7052 18.077 43.771C18.2365 43.9149 18.5039 44.217 18.5039 44.6241V47.1635C18.5039 48.1762 19.3332 49 20.3525 49H24.2432C25.2625 49 26.0918 48.1762 26.0918 47.1635V46.8462H32.7402V47.1635C32.7402 48.1762 33.5696 49 34.5888 49H38.4796C39.4988 49 40.3281 48.1762 40.3281 47.1635V45.5339C40.3281 44.6989 40.6681 43.892 41.2856 43.2619C42.487 42.0355 43.4226 40.5382 43.9913 38.9316C44.4377 37.6706 44.6641 36.3477 44.6641 35.0001C44.6641 34.6369 44.6466 34.2779 44.6143 33.923C44.6328 33.9232 44.6513 33.9244 44.6698 33.9244C45.5213 33.9244 46.3505 33.6789 47.0766 33.1952C48.281 32.3928 49 31.0546 49 29.6154V28.5385C49 27.9437 48.5147 27.4615 47.916 27.4615ZM41.9462 38.2171C41.4811 39.5308 40.7155 40.7557 39.732 41.7596C38.7184 42.7941 38.1602 44.1345 38.1602 45.5339V46.8462H34.9082C34.9082 45.6725 34.9082 44.8055 34.9082 43.6154C34.9082 43.0206 34.4229 42.5385 33.8242 42.5385C33.2256 42.5385 32.7402 43.0206 32.7402 43.6154V44.6923H26.0918V43.6154C26.0918 43.0206 25.6065 42.5385 25.0078 42.5385C24.4092 42.5385 23.9238 43.0206 23.9238 43.6154C23.9238 45.5191 23.9238 45.6335 23.9238 46.8462H20.6719V44.6241C20.6719 43.7076 20.268 42.8384 19.5347 42.1768C18.5193 41.2604 17.6937 40.1193 17.1473 38.8766C17.0681 38.6965 16.9408 38.5414 16.7792 38.4281L14.6266 36.9179C14.3395 36.7163 14.168 36.3874 14.168 36.0381V32.8462C14.168 32.2523 14.6542 31.7692 15.252 31.7692C16.1197 31.7692 16.3821 31.7986 16.6335 31.6581C16.7914 31.5953 17.0261 31.397 17.1462 31.1258C17.1465 31.125 17.1469 31.1243 17.1472 31.1235L17.1483 31.1209C17.676 29.9219 18.4313 28.8563 19.3932 27.9534L19.4049 27.9424C19.4155 27.9324 19.426 27.9222 19.4363 27.9118C19.7084 27.6361 19.8053 27.2436 19.7101 26.8836L18.7986 23.1538H20.6719C21.6001 23.1538 22.4828 23.5485 23.0938 24.2366C23.6982 24.9172 24.5744 25.3076 25.4976 25.3076L32.7402 25.2933C38.1196 25.2933 42.4961 29.6557 42.4961 35C42.4961 36.1037 42.311 37.1861 41.9462 38.2171Z"
                fill="black"
              ></path>
              <path
                d="M32.7906 27.2656H27.7038C27.1037 27.2656 26.6172 27.7522 26.6172 28.3523C26.6172 28.9524 27.1037 29.4389 27.7038 29.4389H32.7906C33.3908 29.4389 33.8773 28.9524 33.8773 28.3523C33.8773 27.7522 33.3908 27.2656 32.7906 27.2656Z"
                fill="black"
              ></path>
            </svg>
            <p className={s.topItemText}>
              Покрытие расходов на ремонт автомобиля
            </p>
          </div>
          <div className={s.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 60 60"
              fill="none"
            >
              <circle cx="30" cy="30" r="30" fill="#37a607"></circle>
              <path
                d="M12.5817 45.0006V23.6847H15.7484V45.0006M25.2512 32.3694H14.9593M34.7479 32.3694H44.2482M11 45.0002H19.7086M47.42 45.0006V23.6847H44.2532V45.0006M49 44.9977H40.2914M37.9182 18.9474L36.889 16.6579C36.5723 15.6316 35.6223 15 34.5931 15H25.4095C24.3803 15 23.5095 15.6316 23.1928 16.6579L22.0844 18.9474M26.0411 25.2629H33.958M38.3897 22.4211C37.4397 23.2106 36.0146 23.6842 34.7479 23.6842M21.6084 22.4211C22.5584 23.2106 23.9834 23.6842 25.2502 23.6842M24.4578 27.6309H21.291M38.7081 27.6309H35.5413M41.8767 18.1577H39.5016C39.2641 18.1577 37.1266 20.5262 35.5432 20.5262H24.4595C22.8761 20.5262 20.7386 18.1577 20.5011 18.1577H18.126C17.651 18.1577 17.3343 18.4735 17.3343 18.9472V19.9735C17.3343 20.4472 17.651 20.763 18.126 20.763L19.7094 21.3156V22.1051C19.2344 22.5788 18.9177 23.2893 18.9177 23.9999V25.263C18.9177 25.9736 19.2344 26.6051 19.7094 26.9999V29.2104C19.7094 29.6841 20.0261 29.9999 20.5011 29.9999H23.6678C24.1428 29.9999 24.4595 29.6841 24.4595 29.2104V27.6315H35.5432V29.2104C35.5432 29.6841 35.8599 29.9999 36.3349 29.9999H39.5016C39.9766 29.9999 40.2933 29.6841 40.2933 29.2104V26.9999C40.7683 26.6051 41.085 25.9736 41.085 25.263V23.9999C41.085 23.2893 40.7683 22.5788 40.2933 22.1051V21.3156L41.8767 20.763C42.3517 20.763 42.6684 20.4472 42.6684 19.9735V18.9472C42.6684 18.4735 42.3517 18.1577 41.8767 18.1577Z"
                stroke="#171717"
                stroke-width="1.63045"
                stroke-miterlimit="10"
              ></path>
            </svg>
            <p className={s.topItemText}>Ремонт у официальных дилеров</p>
          </div>
          <div className={s.item}>
            <svg
              width="120"
              height="120"
              viewBox="0 0 60 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 8.9989H28.9995V10.999H25V8.9989Z" fill="#332208" />
              <path
                d="M59.1418 6.00937L52.349 5.03941C51.1104 4.27858 49.825 3.59749 48.4997 2.99981C44.1231 1.01758 39.373 -0.00526887 34.5679 2.04093e-05H33.3878C27.7173 0.00408898 22.1374 1.42689 17.157 4.13862L13.7288 6.00856C9.71598 6.05372 5.78043 7.12092 2.29411 9.10803C0.877278 9.92054 0.00244141 11.428 0 13.0607V18.998C0 19.5505 0.447591 19.9981 1.00016 19.9981H4.35791C5.45003 23.1134 8.86108 24.7539 11.9767 23.6619C13.6918 23.061 15.0399 21.7126 15.6409 19.9981H42.358C43.4501 23.1134 46.8612 24.7539 49.9768 23.6619C51.6915 23.061 53.0399 21.7126 53.6409 19.9981H53.9998C54.1272 19.9981 54.2533 19.9741 54.3717 19.9269L57.6107 18.6274C59.0576 18.0545 60.0053 16.6541 60 15.0987V6.99927C60 6.50208 59.6342 6.08016 59.1418 6.00937ZM13.9189 18.7983C13.4766 20.9624 11.3635 22.3583 9.19922 21.916C7.0345 21.4738 5.63843 19.361 6.08073 17.1964C6.52344 15.0323 8.63647 13.6364 10.8008 14.0787C12.6632 14.4591 14.0002 16.0975 13.9998 17.9984C13.9998 18.2669 13.9726 18.535 13.9189 18.7983ZM31.9999 17.9984H15.9998C15.9998 14.6849 13.3138 11.9988 10 11.9988C6.6862 11.9988 3.99984 14.6849 3.99984 17.9984H1.99992V13.0607C2.00114 12.1448 2.49186 11.299 3.28695 10.8441C6.55029 8.98109 10.2425 8.00055 13.9998 7.99933H31.9999V17.9984ZM31.9999 5.99961H17.922L18.1148 5.89423C22.3901 3.57105 27.1391 2.25404 31.9999 2.04369V5.99961ZM33.9998 1.99975H34.5658C38.5958 1.99527 42.5891 2.76017 46.3322 4.25376L44.5862 5.99961H33.9998V1.99975ZM51.9189 18.7983C51.4766 20.9624 49.3636 22.3583 47.1989 21.916C45.0346 21.4738 43.6385 19.361 44.0808 17.1964C44.5231 15.0323 46.6365 13.6364 48.8008 14.0787C50.6632 14.4591 52.0003 16.0975 51.9999 17.9984C51.9999 18.2669 51.9726 18.535 51.9189 18.7983ZM58.0001 8.99899H55V10.9991H58.0001V15.0987C58.0025 15.8355 57.5533 16.4987 56.8681 16.7692L53.9998 17.9211C53.9998 17.8291 53.988 17.738 53.9819 17.646C53.9758 17.5541 53.9738 17.4463 53.964 17.3462C53.9538 17.2461 53.9339 17.146 53.918 17.0463C53.9018 16.9462 53.89 16.8461 53.87 16.7554C53.8501 16.6643 53.8208 16.5634 53.7947 16.4682C53.7687 16.3734 53.7488 16.2773 53.7187 16.1842C53.6889 16.0914 53.6527 16.0023 53.619 15.9112C53.5848 15.8204 53.5539 15.7265 53.5189 15.6361C53.4839 15.5462 53.4367 15.4644 53.3948 15.3794C53.3528 15.2944 53.3118 15.2012 53.265 15.1153C53.2178 15.0295 53.1649 14.9563 53.1197 14.8765C53.0749 14.7964 53.02 14.7052 52.963 14.6235C52.9057 14.5413 52.8528 14.4766 52.7978 14.4025C52.7429 14.3285 52.6806 14.2414 52.6168 14.1645C52.5529 14.0876 52.4931 14.0274 52.4308 13.9643C52.369 13.9017 52.2998 13.8166 52.231 13.7467C52.1618 13.6767 52.0939 13.6214 52.0251 13.5595C51.956 13.4977 51.8819 13.4244 51.8058 13.3593C51.7301 13.2946 51.6528 13.2446 51.5771 13.1876C51.501 13.1307 51.425 13.0696 51.3452 13.0163C51.265 12.9635 51.1751 12.9167 51.0893 12.8605C51.003 12.8044 50.933 12.7604 50.852 12.7177C50.7711 12.6746 50.6702 12.6294 50.5782 12.5855C50.4862 12.5415 50.4142 12.5025 50.3292 12.4667C50.2441 12.4305 50.129 12.3926 50.0293 12.3568C49.9292 12.3206 49.8641 12.2925 49.779 12.2657C49.6651 12.2307 49.5483 12.2055 49.4319 12.1766C49.3559 12.1587 49.283 12.1347 49.2061 12.1188C49.0832 12.0936 48.9571 12.0798 48.8322 12.0614C48.7581 12.0517 48.6873 12.0354 48.6133 12.0285C48.4131 12.0085 48.2133 11.9976 48.0033 11.9976C44.6907 12.0008 42.0064 14.6849 42.0032 17.9972H34.0002V7.99893H45C45.2653 7.99893 45.5196 7.89355 45.7068 7.70599L48.3 5.11305C49.3884 5.63099 50.4468 6.20995 51.4701 6.8471C51.5881 6.92074 51.72 6.96916 51.8579 6.98909L58.0001 7.86588V8.99899Z"
                fill="#332208"
              />
            </svg>

            <p className={s.topItemText}>Эвакуация и диагностика за наш счет</p>
          </div>
          <div className={s.item}>
            <svg
              className={s.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 60 24"
              fill="none"
            >
              <path
                d="M6.11445 0.0257052C7.64145 0.0257052 9.16245 0.599937 10.3295 1.76794C12.287 3.72965 12.5839 6.70303 11.2699 8.99995L29.0495 27.434C29.636 28.0218 29.636 28.9733 29.0495 29.5611C28.757 29.8542 28.3729 30 27.9889 30C27.6049 30 27.2209 29.8542 26.9284 29.5611L9.17595 11.1526C8.21895 11.7313 7.14045 12.0214 6.06195 12.0214C4.53495 12.0214 3.00945 11.4397 1.84245 10.2717C0.25845 8.68277 -0.22905 6.43545 0.33045 4.41512L4.00845 8.10103H6.12945L8.25195 5.97547V3.8484L4.62045 0.212105C5.11095 0.0888404 5.61345 0.0257052 6.11445 0.0257052ZM8.28 15.443L10.3635 17.6046L2.9985 24.4039L5.121 26.5295L12.447 19.7648L14.532 21.9249L7.242 28.6551C6.0705 29.8291 4.17 29.8291 2.9985 28.6551L0.8775 26.5295C-0.2925 25.3555 -0.2925 23.4524 0.8775 22.2769L8.28 15.443ZM27.8772 0L29.9982 2.12556L27.8772 6.37668L24.6957 7.43946L19.7082 12.5311L17.6217 10.3695L22.5747 5.3139L23.6352 2.12556L27.8772 0Z"
                fill="#332208"
              />
            </svg>
            <p className={s.topItemText}>Только оригинальные запчасти</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
