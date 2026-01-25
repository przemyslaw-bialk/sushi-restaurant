import { useEffect, useState } from "react";
import Slider from "react-slick";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpeg";
import img8 from "../assets/gallery/8.jpeg";
import img9 from "../assets/gallery/9.jpeg";
import img10 from "../assets/gallery/10.jpeg";
import img11 from "../assets/gallery/11.jpeg";
import img12 from "../assets/gallery/12.jpeg";
import img13 from "../assets/gallery/13.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PrevArrow, NextArrow } from "./Arrows";
import bg from "../assets/background_gallery.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

const Carousel = () => {
  const settings = {
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    infinite: true,
    speed: 500,

    slidesToShow: 3, // 💻 DESKTOP
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 768, // 📱 MOBILE
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="mx-auto flex h-[600px] w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[1200px] px-4">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-3">
              <img
                src={img}
                alt={`slide ${index}`}
                loading="lazy"
                className="h-[330px] w-full rounded-2xl object-cover shadow-[0_0_25px_rgba(239,127,26,0.45)] transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(239,127,26,0.75)]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
