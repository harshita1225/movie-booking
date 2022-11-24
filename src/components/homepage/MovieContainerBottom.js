import React from "react";
import MovieNEWCard from "../homepage/MovieNEWCard";
import { newMovies } from "../localdata/LocalData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieContainerBottom = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5 w-[1300px] mx-auto mt-10">
      <div className="text-white text-[22px] tracking-wider p-5 rounded-full  flex ">
        <h2 className="text-white text-[22px] tracking-wider p-1 rounded-full  ">
          COMING SOON...
        </h2>
      </div>

      <Slider {...settings}>
        {newMovies.map((item, i) => (
          <MovieNEWCard item={item} key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieContainerBottom;
