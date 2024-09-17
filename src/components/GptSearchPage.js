import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"

const GptSearchPage=()=>{
    return (
      <div className=" absolute bg-black w-full h-screen">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    );
}
export default GptSearchPage;