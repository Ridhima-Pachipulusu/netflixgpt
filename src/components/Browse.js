
import UseNowPlaying from "../hooks/UseNowPlaying";
import UsePopularMovies from "../hooks/UsePopularMovies";
import UseTopRatedMovies from "../hooks/UseTopRated";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import  SecondaryContainer  from "./SecondaryContainer";

const Browse = () => {
  UseNowPlaying();
  UsePopularMovies();
  UseTopRatedMovies();
  return (
    <div >
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};
export default Browse;
