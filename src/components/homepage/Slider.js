import React from "react";
import Carousel from "react-material-ui-carousel";

const Slider = () => {
  return (
    <div className="w-full flex justify-center  h-[400px] mt-10 bg-black ">
      <Carousel
        interval={5000}
        sx={{
          width: "1400px",
          height: "400px",
          textAlign: "center",
        }}
      >
        <img
          style={{ height: "425px" }}
          src="https://www.regmovies.com/static/dam/jcr:3a19b006-382b-4170-b016-737cbc8c2080"
          alt="1"
        />
        <img
          style={{ height: "425px" }}
          src="https://www.regmovies.com/static/dam/jcr:e6856b7a-bf8c-4ae0-b242-b75bc235ef4f"
          alt="2"
        />
        <img
          style={{ height: "425px" }}
          src="https://www.regmovies.com/static/dam/jcr:c6619a0f-edf0-4fc4-a729-09a31ab40240"
          alt="3"
        />
        <img
          style={{ height: "425px" }}
          src="https://www.regmovies.com/static/dam/jcr:195ca417-f6ff-472d-bf51-dfaa6ba23fbe"
          alt="4"
        />
        <img
          style={{ height: "425px" }}
          src="https://www.regmovies.com/static/dam/jcr:e8c9a8ef-208b-43dd-b41a-7cc1b78ca71c"
          alt="5"
        />
        <img
          style={{ height: "425px" }}
          src="https://www.regmovies.com/static/dam/jcr:69fe36f6-67ff-4577-81c6-a2ac0abee0b9"
          alt="6"
        />
        <img
          style={{ height: "500px" }}
          src="https://www.regmovies.com/static/dam/jcr:0d67baa1-87f7-451b-a363-09e39d205e52"
          alt="7"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
