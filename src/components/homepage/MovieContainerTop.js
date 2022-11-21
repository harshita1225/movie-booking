import React, { useState } from "react";
import MovieCard from "../homepage/MovieCard";
import { oldMovies } from "../localdata/LocalData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MovieContainerTop = () => {
  const [genre, setGenre] = useState("");

  const handleChange = (event) => {
    setGenre(event.target.value);
    // dispatch({ type: "genre", payload: genre });
  };
  const filteredArray = oldMovies.filter((item) => item.genre.includes(genre));
  console.log(filteredArray);

  /* function getFilteredList() {
    if (genre === "") {
      return oldMovies;
    }
    return oldMovies.filter((item) => item.genre.includes(genre));
  }
  console.log(genre);
  console.log(oldMovies);

  /*  // Avoid duplicate function calls with useMemo
 // let filteredList = useMemo(getFilteredList, [genre, oldMovies]); */

  return (
    <div className="flex flex-col gap-5 w-[1300px] mx-auto mt-[100px]">
      <div className="text-white text-[22px] tracking-wider rounded-full  flex items-center justify-between px-7 ">
        <div>NOW SHOWING</div>
        <div>
          <FormControl
            sx={{
              m: 1,
              minWidth: 100,
              zIndex: "5",
              padding: "5",
              background: "orange",
            }}
          >
            <InputLabel
              style={{ color: "black" }}
              id="demo-simple-select-autowidth-label"
            >
              Genre
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={genre}
              onChange={handleChange}
              autoWidth
              label="Genre"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Drama">DRAMA</MenuItem>
              <MenuItem value="Kids">KIDS</MenuItem>
              <MenuItem value="Action">ACTION</MenuItem>
              <MenuItem value="Horror">HORROR</MenuItem>
              <MenuItem value="Comedy">COMEDY</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {genre
          ? filteredArray.map((el) => <MovieCard item={el} width={300} />)
          : oldMovies.map((item) => <MovieCard width={300} item={item} />)}
      </div>
    </div>
  );
};

export default MovieContainerTop;
