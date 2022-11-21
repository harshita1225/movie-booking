import React from "react";
import Header from "../header/Header";
import Footer from "../homepage/Footer";
import { newMovies } from "../localdata/LocalData";
import { oldMovies } from "../localdata/LocalData";
import { useNavigate, useParams } from "react-router-dom";
import YoutubeEmbed from "./YouTubeEmmb";

const SingleMoviePage = () => {
  const { singlemovie } = useParams();
  const navigate = useNavigate();

  const filteredMovie = oldMovies?.filter(
    (item) => +item.id === +singlemovie
  )[0];

  const filteredMovieNew = newMovies?.filter(
    (item) => +item.id === +singlemovie
  )[0];

  //console.log(filteredMovie);
  return (
    <div className="bg-zinc-900 text-white">
      <Header />
      <div className="w-full flex flex-col items-center mx-auto">
        <div className="w-[900px]">
          <div className="border-2 border-orange-500 text-orange-500 w-[900px] h-[59px] flex items-center text-[20px] font-bold mt-[61px] mb-[35px] p-3 mx-auto">
            <h2>Please update your location to view available showtimes.</h2>
          </div>
          {/* <div className="text-[35px] mb-[20px] font-bold">
          {filteredMovie?.title}
        </div> */}
          <div className="w-full h-[550px] flex mx-auto justify-center ">
            <YoutubeEmbed
              embedId={filteredMovie?.trailer || filteredMovieNew?.trailer}
            />
          </div>

          <div className="flex flex-col w-[930px] items-center">
            <div>
              <div className="w-full h-[50px]">
                <h2 className="text-[22px]">
                  More information about :{" "}
                  <span className="text-orange-500 mx-1">
                    {filteredMovie?.title || filteredMovieNew?.title}
                  </span>
                </h2>
              </div>

              <div className="flex w-[900px]">
                <div className="w-[620px] text-left pr-5">
                  <div className="flex  border-red-400 justify-between mb-6">
                    <div>
                      <p className="text-[12px] underline">Release Date: </p>
                      <p className="text-[16px]">
                        {filteredMovie?.releasedate ||
                          filteredMovieNew?.releasedate}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] underline">Running time: </p>
                      <p className="text-[16px]">
                        {filteredMovie?.duration || filteredMovieNew?.duration}{" "}
                        minutes
                      </p>
                    </div>
                  </div>{" "}
                  <div className="w-[600px] h-fit mb-[2rem]">
                    {filteredMovie?.overview || filteredMovieNew?.overview}
                  </div>
                  <div>
                    <div className="w-[600px] h-[41px] text-[16px] flex">
                      <span className="w-[200px]">Original title:</span>
                      {filteredMovie?.title || filteredMovieNew?.title}
                    </div>
                  </div>
                  <div>
                    <div className="w-[600px] h-[41px] text-[16px] flex ">
                      <span className="w-[200px]">Movie genre:</span>
                      {filteredMovie?.genre || filteredMovieNew?.genre}
                    </div>
                  </div>
                  <div>
                    <div className="w-[600px] h-[74px] text-[16px] flex ">
                      <span className="w-[200px] "> Cast:</span>
                      <p className="w-[400px]">
                        {filteredMovie?.cast || filteredMovieNew?.cast}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="w-[600px] h-[41px] text-[16px] flex">
                      <span className="w-[200px]"> Director: </span>
                      {filteredMovie?.Director || filteredMovieNew?.Director}
                    </div>
                  </div>
                  <div>
                    <div className="w-[600px] h-[41px] text-[16px] flex">
                      <span className="w-[200px]">Production:</span>2022
                    </div>
                  </div>
                </div>

                <div className="w-[250px]">
                  <img
                    src={filteredMovie?.poster || filteredMovieNew?.poster}
                    alt="poster"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/home")}
              className="bg-orange-500 p-3 rounded-xl"
            >
              Go Back
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SingleMoviePage;
