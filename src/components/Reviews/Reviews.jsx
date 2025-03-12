import React from "react";
import Slider from "react-slick";
import "./reviews.css";

const reviewsData = [
  {
    name: "Михаил, 28 лет",
    text: "bravo",
  },
  {
    name: "Инна, 35 лет",
    text: "bravo",
  },
  {
    name: "Игорь, 25 лет",
    text: "bravo",
  },
  {
    name: "Марина, 30 лет",
    text: "bravo",
  },
];

const Reviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

  return (
    <section className="reviews">
      <div className="container">
        <h3 className="reviews__title">Отзывы</h3>
        <div className="reviews__slider">
          <Slider {...settings}>
            {reviewsData.map((review, index) => (
              <div key={index} className="reviews__item">
                <p className="reviews__item-name">{review.name}</p>
                <p className="reviews__item-text">{review.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
