import { useEffect } from "react";
import { Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const UsePopularMovies = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      Options
    );
    const json = await data.json();
    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    getMoviesList();
  }, []);
};
export default UsePopularMovies;