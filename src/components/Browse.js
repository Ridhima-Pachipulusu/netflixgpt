import { useSelector } from "react-redux";
import UseNowPlaying from "../hooks/UseNowPlaying";
import UsePopularMovies from "../hooks/UsePopularMovies";
import UseTopRatedMovies from "../hooks/UseTopRated";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const selector = useSelector((store) => store.gpt.showGptPage);
  UseNowPlaying();
  UsePopularMovies();
  UseTopRatedMovies();
  return (
    <div>
      <Header />
      {selector ? (
        <GptSearchPage/>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
