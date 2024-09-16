import { card } from "../utils/Constants";

const MovieCard=({path})=>{
    return (
      <div className=" w-40">
        <img className=" px-2 rounded-xl" src={card + path} />
      </div>
    );
}
export default MovieCard;