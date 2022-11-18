import React from "react";
import Header from "../header/Header";
import Footer from "../homepage/Footer";
import { newMovies } from "../localdata/LocalData";
import { oldMovies } from "../localdata/LocalData";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YouTubeEmmb";

const SingleMoviePage = () => {
  const { singlemovie } = useParams();

  const filteredMovie = oldMovies?.filter(
    (item) => +item.id === +singlemovie
  )[0];
  console.log(filteredMovie);
  return (
    <div className="bg-zinc-900 text-white">
      <Header />
      <div className="w-[1000px] mx-auto">
        <div>
          <h2 className="text-[20px] font-bold">More Information About</h2>
        </div>

        <div className="flex flex-col">
          <div>
            <div className="text-[35px]">{filteredMovie?.title}</div>
            <div className="flex border-2 border-red-400 justify-between">
              <div> Release Date: {filteredMovie?.releasedate}</div>
              <div>Running Time: {filteredMovie?.duration} minutes</div>
            </div>
            <div className="flex w-[1050px] ">
              <div>
                <img src={filteredMovie?.poster} alt="poster" />
              </div>
              <div className="w-[700px] text-right">
                {" "}
                <div>{filteredMovie?.overview}</div>
                <div>
                  <div>Original title:{filteredMovie?.title}</div>
                </div>
                <div>
                  <div>Movie genre:{filteredMovie?.genre}</div>
                </div>
                <div>
                  <div>Cast: {filteredMovie?.cast}</div>
                </div>
                <div>
                  <div>Director: {filteredMovie?.Director}</div>
                </div>
                <div>
                  <div>Production:2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[550px]">
        <YoutubeEmbed embedId="sLH7_W0XQRw" />
      </div>
      <Footer />
    </div>
  );
};

export default SingleMoviePage;
