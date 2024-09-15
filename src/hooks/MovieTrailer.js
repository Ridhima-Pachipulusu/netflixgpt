import { useEffect } from "react";
import { Options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const trailerplay = useSelector((store) => store.movies?.trailerVideo);
  const videos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      Options
    );
    const json = await data.json();
    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    videos();
  }, []);
};
export default useMovieTrailer;