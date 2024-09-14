import { useSelector } from "react-redux";
import { Trailer } from "./Trailer"
import { TrailerTitle } from "./TrailerTiltle"

export const MainContainer=()=>{
    const movies=useSelector((store)=>store.movies?.list);
    if(!movies) return;
    const movie=movies[0];
    console.log(movie);
    return (
      <div>
        <TrailerTitle />
        <Trailer />
      </div>
    );
}