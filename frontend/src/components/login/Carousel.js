import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const CarouselComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => <ul className="slick-dots slick-bottom">{dots}</ul>,
  };

  const agriculturalNews = [
    {
      title: 'News Title 1',
      content: 'This is the content of agricultural news 1.',
    },
    {
      title: 'News Title 2',
      content: 'This is the content of agricultural news 2.',
    },
    {
      title: 'News Title 3',
      content: 'This is the content of agricultural news 3.',
    },
  ];

  return (
        <Slider {...settings} ref={sliderRef}>
          {agriculturalNews.map((news, index) => (
            <div key={index}>
              <div className="ui container" style={{ height: '400px' }}>
                <h3 className="ui header">{news.title}</h3>
                <p>{news.content}</p>
              </div>
            </div>
          ))}
        </Slider>

  );
};

export default CarouselComponent;
