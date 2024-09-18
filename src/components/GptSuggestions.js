import { useSelector } from "react-redux";
import GptResultsDisplayCard from "./GptResultsDisplayCard";

const GptSuggestions = () => {
  const selector = useSelector((store) => store.gpt.movieResults);
  return (

   <div className="grid grid-cols-7 bg-black">
     {selector?.map((innerArray, outerIndex) =>
       innerArray?.map((obj, innerIndex) => (
         <GptResultsDisplayCard
           key={`${outerIndex}-${innerIndex}`}
           data={obj?.poster_path}
         />
       ))
     )}
   </div>
 );
}
export default GptSuggestions;