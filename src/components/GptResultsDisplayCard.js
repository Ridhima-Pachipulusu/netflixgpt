import { card } from "../utils/Constants";

const GptResultsDisplayCard=({data})=>{
    if(!data) return null;
    return (
      <div className=" pt-10">
        <img className=" w-48  my-1" src={card + data} />
      </div>
    );
}
export default GptResultsDisplayCard;