import MovieCard from "./MovieCard";

const MoviesList=({title,listOfMovies})=>{
    return (
      <div className=" flex overflow-x-scroll scrollbar-hide ml-16">
        <div>
          <h1 className=" font-semibold text-2xl py-2 px-2 text-white">{title}</h1>
          <div className="flex  w-full m-0 p-0">
            {listOfMovies.map((movie) => (
              <MovieCard key={movie.id} path={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    );
}
export default MoviesList;


