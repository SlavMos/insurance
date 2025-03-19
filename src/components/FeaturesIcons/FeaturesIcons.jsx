import s from "./featuresIcons.module.css";

const FeaturesIcons = () => {
  return (
    <section className={s.featuresIcon}>
      <div className={s.container}>
        <h1 className={s.heading}>Как работает гарантия на автомобили</h1>
        <div className={s.featuresIcons}>
          <div className={s.features}>
            <img
              className={s.img}
              src="../../../public/icons/attachment (4).png"
              alt=""
            />
            <h4 className={s.title}>Произошла поломка автомобиля</h4>
          </div>
          <div className={s.features}>
            <img className={s.image} src="/icons/2.png" alt="" />
            <h4 className={s.title}>Звоните на линию техподдержки</h4>
          </div>
          <div className={s.features}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.91951 27.2711C5.91951 27.2711 5.9159 27.2747 5.90441 27.2802C5.91304 27.2736 5.91951 27.2711 5.91951 27.2711ZM28.042 32.7901H26.3933V30.2901H28.042V32.7901Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.2831 21.1882C31.6614 19.9231 29.1961 18 25.1573 18L15.2646 18C11.2122 18 7.59565 21.1319 5.85136 27.3007C5.83429 27.3063 5.81351 27.3124 5.78845 27.3189C5.69808 27.3423 5.59945 27.3545 5.51705 27.3596C5.47811 27.362 5.44805 27.3625 5.43109 27.3625L5.41739 27.3624L5.41978 27.3625L5.42354 27.3626L5.42608 27.3627L5.42832 27.3628L5.37194 27.3615C3.22674 27.3615 1.57637 27.7881 0.69741 29.2325C0.298975 29.8873 0.143061 30.6311 0.0707974 31.343C-4.57466e-05 32.0409 -2.27425e-05 32.8343 8.60945e-07 33.6446L1.81462e-06 33.689C1.81462e-06 35.9893 0.823973 37.7315 2.14484 38.8827C3.12051 39.7331 4.30262 40.2054 5.4791 40.3852C5.73054 41.5818 6.36145 42.643 7.24291 43.4179H4.5341V54.3897L5.78411 55.6397H18.2626C18.8284 58.3992 21.2285 60.4998 24.1446 60.4998C27.0606 60.4998 29.4607 58.3992 30.0265 55.6397L60.9316 55.6395C61.4973 58.3991 63.8974 60.4998 66.8136 60.4998C69.7298 60.4998 72.13 58.3991 72.6957 55.6395H75.5371C77.561 55.6395 79.1663 53.9608 79.1663 51.959V40.1714C79.1663 38.8859 78.8843 37.7632 78.495 36.7026L78.4612 36.6198L75.0114 28.9638L75.0047 28.9492C73.6226 25.9843 70.6993 23.9741 67.3289 23.9741H58.8829C56.8589 23.9741 55.2536 25.6527 55.2536 27.6545V43.4179H43.8949C44.9289 42.509 45.6181 41.2061 45.7545 39.753L45.7666 39.7476C45.8521 39.7097 45.9537 39.6646 46.08 39.6075C46.3691 39.4769 46.7283 39.3089 47.1648 39.0835C48.6086 38.338 49.448 37.4281 49.8821 36.3744C50.2354 35.517 50.2745 34.6321 50.3017 34.0162L50.3018 34.015C50.3054 33.9336 50.3088 33.8569 50.3126 33.7856L50.3145 33.7176C50.3145 32.8247 49.8578 31.0379 48.3136 29.4437C47.8251 28.9393 47.1735 28.5641 46.5342 28.2786C45.8795 27.9862 45.1513 27.7504 44.4375 27.5615C43.0987 27.2074 41.7194 26.9949 40.7817 26.8992C40.0496 26.6062 39.3242 26.1876 38.7322 25.7136L34.4604 22.057L34.3176 21.9513C34.0149 21.7591 33.6734 21.4927 33.2831 21.1882ZM15.2646 20.5C12.7488 20.5 9.79255 22.4316 8.22543 28.0939C7.91601 29.2119 6.93179 29.6055 6.4143 29.7393C6.12413 29.8143 5.85804 29.8433 5.67086 29.8548C5.57501 29.8608 5.49406 29.8624 5.43372 29.8625C5.40341 29.8625 5.37794 29.8621 5.35798 29.8617L5.35356 29.8615C3.39265 29.8642 2.98414 30.2839 2.83308 30.5321C2.71627 30.7241 2.61456 31.0384 2.55802 31.5955C2.50134 32.1538 2.5 32.8241 2.5 33.689C2.5 35.35 3.07114 36.3738 3.78744 36.9981C4.27246 37.4208 4.87596 37.7047 5.52608 37.8518C6.11544 35.4896 8.19444 33.704 10.7303 33.704C13.3086 33.704 15.4146 35.5498 15.9628 37.9708H35.175C35.7233 35.5498 37.8293 33.704 40.4075 33.704C42.6934 33.704 44.608 35.1548 45.395 37.171C45.57 37.0882 45.7725 36.9888 46.0179 36.8621C47.0472 36.3306 47.4058 35.8221 47.5706 35.4221C47.7473 34.9932 47.7692 34.5643 47.8029 33.9069L47.8032 33.9015L47.8033 33.8986C47.8067 33.8327 47.8102 33.7646 47.814 33.6939C47.8018 33.4073 47.5795 32.279 46.5179 31.1831C46.3469 31.0065 46.0228 30.7882 45.5147 30.5613C45.022 30.3413 44.431 30.1458 43.7981 29.9784C42.5589 29.6506 41.2585 29.4559 40.4313 29.3767H12.4613C10.7146 29.3767 9.75063 27.4961 10.4173 26.0716L10.8222 25.1494L10.8301 25.1319C11.7791 23.0578 13.8772 21.7566 16.0886 21.7566H29.7596C28.5868 21.0398 27.1868 20.5 25.1573 20.5L15.2646 20.5ZM5.91951 27.2711C5.91951 27.2711 5.9159 27.2747 5.90441 27.2802C5.91304 27.2736 5.91951 27.2711 5.91951 27.2711ZM14.2177 43.4179H36.9201C36.0597 42.6615 35.4381 41.6323 35.175 40.4708H15.9628C15.6998 41.6323 15.0781 42.6615 14.2177 43.4179ZM7.03411 46.1012V53.1397H18.2623C18.8275 50.3794 21.2279 48.2781 24.1446 48.2781C27.0612 48.2781 29.4616 50.3794 30.0268 53.1397L55.2536 53.1395L55.2536 46.1012H7.03411ZM57.7536 53.1395H60.9314C61.4967 50.3793 63.897 48.2781 66.8136 48.2781C69.7301 48.2781 72.1306 50.3793 72.6959 53.1395H75.5371C76.1303 53.1395 76.6663 52.6306 76.6663 51.959V48.348H75.5366V45.848H76.6663V41.0568H66.0204C63.9965 41.0568 62.3912 39.3783 62.3912 37.3764V32.5155C62.3912 30.5136 63.9965 28.835 66.0204 28.835H72.0318C70.9159 27.3727 69.2084 26.4741 67.3289 26.4741H58.8829C58.2896 26.4741 57.7536 26.9829 57.7536 27.6545V53.1395ZM76.1631 37.6051L73.3378 31.335H66.0204C65.4271 31.335 64.8912 31.8438 64.8912 32.5155V37.3764C64.8912 38.048 65.4271 38.5568 66.0204 38.5568H76.459C76.3801 38.2429 76.2804 37.928 76.1631 37.6051ZM43.2789 39.2752C43.2746 39.2129 43.2736 39.149 43.2765 39.0842C43.2081 37.4442 41.9118 36.204 40.4075 36.204C38.8618 36.204 37.5357 37.5136 37.5357 39.2208C37.5357 40.9279 38.8618 42.2375 40.4075 42.2375C41.9368 42.2375 43.2511 40.9557 43.2789 39.2752ZM36.2465 26.8767L33.1856 24.2566H25.1702V26.8767H36.2465ZM22.6702 26.8767V24.2566H16.0886C14.8405 24.2566 13.6437 25 13.1071 26.1641L12.7941 26.8767H22.6702ZM10.7303 36.204C9.1846 36.204 7.85847 37.5136 7.85847 39.2208C7.85847 40.9279 9.1846 42.2375 10.7303 42.2375C12.276 42.2375 13.6021 40.9279 13.6021 39.2208C13.6021 37.5136 12.276 36.204 10.7303 36.204ZM24.1446 50.7781C22.2319 50.7781 20.6362 52.3694 20.6362 54.3889C20.6362 56.4084 22.2319 57.9998 24.1446 57.9998C26.0572 57.9998 27.6529 56.4084 27.6529 54.3889C27.6529 52.3694 26.0572 50.7781 24.1446 50.7781ZM63.3053 54.3889C63.3053 56.4084 64.901 57.9998 66.8136 57.9998C68.7263 57.9998 70.322 56.4084 70.322 54.3889C70.322 52.3694 68.7263 50.7781 66.8136 50.7781C64.9009 50.7781 63.3053 52.3694 63.3053 54.3889Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.91951 27.2711C5.91951 27.2711 5.9159 27.2747 5.90441 27.2802C5.91304 27.2736 5.91951 27.2711 5.91951 27.2711Z"
                fill="currentColor"
              ></path>
            </svg>
            <h4 className={s.title}>
              Мы направляем вас в ближайщий сервиз-партнер
            </h4>
          </div>
          <div className={s.features}>
            <img className={s.image} src="/icons/1.png" alt="" />
            <h4 className={s.title}>
              Оплачиваем ремонт <br /> по гарантии{" "}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIcons;
