import { useSelector } from "react-redux";
import { Trailer } from "./Trailer"
import { TrailerTitle } from "./TrailerTiltle"

export const MainContainer=()=>{
    const movies=useSelector((store)=>store.movies?.list);
    if(!movies) return;
    const movie=movies[0];
    const {original_title,overview,id}=movie
    return (
      <div>
        <TrailerTitle title={original_title} overview={overview} />
        <Trailer movie_id={id}/>
      </div>
    );
}