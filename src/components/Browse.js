import { useEffect } from "react";
import { Options } from "../utils/Constants";
import Header from "./Header";

const Browse = () => {
  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Options
    );
    const json = await data.json();
    console.log(json.results);
  };
  useEffect(() => {
    getMoviesList();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
