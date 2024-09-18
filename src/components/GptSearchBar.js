import {useRef, useState } from "react";
import groq from "../utils/OpenAi";
import { Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGptResults } from "../utils/gptSearchSlice";
const GptSearchBar = () => {
  const searchContext = useRef(null); 
  const [gptPrompt, setGptPrompt] = useState("");
   const dispatch = useDispatch();
  const callTmdb=async(movie)=>{
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1",
      Options
    );
    const json=await data.json();
    return json.results;
  }
  const handleInputChange = () => {
    if (searchContext.current) {

      const prompt =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        searchContext.current.value +
        ". Only give me names of 10 movies, comma separated , don't include any conjunctions like and/or.While giving movie names only give names don't give any sentences like i am happy to help and all";
      setGptPrompt(prompt);
    }
  };
  const makeApiCall = async () => {
    if (searchContext.current.value.length === 0) {
      setGptPrompt("");
      alert("Invalid input. Please enter a valid query.");
      return;
    }
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptPrompt,
        },
      ],
      model: "llama3-70b-8192",
    });
    const movieNames = chatCompletion.choices[0].message.content.split(",");
    const getpromisesArray=movieNames.map(movie => callTmdb(movie));
    const result=await Promise.all(getpromisesArray);
    console.log(result);
    dispatch(addGptResults(result));
  };

  return (
    <div className="flex justify-center mt-28">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()} 
      >
        <input
          ref={searchContext} 
          className="rounded-md px-7 py-4 col-span-10 bg-gray-600 placeholder-white text-white"
          type="text"
          placeholder="What do you want to watch today?"
          onChange={handleInputChange}
        />
        <button
          className="text-white bg-red-600 border border-red-600 rounded-md w-20 ml-1"
          onClick={makeApiCall}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
