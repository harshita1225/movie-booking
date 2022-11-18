import React from "react";
import Header from "../header/Header";
import Slider from "./Slider";
import MovieContainerTop from "./MovieContainerTop";
import MovieContainerBottom from "./MovieContainerBottom";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-zinc-900">
      <Header />
      <Slider />
      <MovieContainerTop />
      <MovieContainerBottom />
      <Footer />
    </div>
  );
};

export default HomePage;
