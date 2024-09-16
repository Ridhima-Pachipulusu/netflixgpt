import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  if (!movie?.list ) return;
  if (!movie?.popularMovies) return;
   if (!movie?.topRated) return;
   
    return (
      <div className=" bg-black">
        <div className="-mt-64 relative z-20">
          <MoviesList title={"Now playing"} listOfMovies={movie.list} />
          <MoviesList title={"Popular"} listOfMovies={movie?.popularMovies} />
          <MoviesList title={"Top Rated"} listOfMovies={movie?.topRated} />
        </div>
      </div>
    );
};
export default SecondaryContainer;
