import { useEffect } from "react";
import { Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addList } from "../utils/movieSlice";

const UseNowPlaying = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Options
    );
    const json = await data.json();
    dispatch(addList(json.results));
  };
  useEffect(() => {
    getMoviesList();
  }, []);
};
export default UseNowPlaying;
