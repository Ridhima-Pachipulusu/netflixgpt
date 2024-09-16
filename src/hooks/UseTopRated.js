import { useEffect } from "react";
import { Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import {addTopRated } from "../utils/movieSlice";

const UseTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      Options
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    getMoviesList();
  }, []);
};
export default UseTopRatedMovies;
