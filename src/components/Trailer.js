
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/MovieTrailer";

export const Trailer=({movie_id})=>{
    const trailerplay = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movie_id);
    return (
      <div className=" w-screen">
        <iframe
          className=" w-screen aspect-video mt-0"
          src={
            "https://www.youtube.com/embed/" +
            trailerplay?.key +
            "?showinfo=0&rel=0&autoplay=1&loop=1&controls=0&mute=1"
          }
          allow="accelerometer;mute; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    );
}