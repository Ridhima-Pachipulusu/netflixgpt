import {useRef, useState } from "react";
import groq from "../utils/OpenAi";
import { Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGptResults } from "../utils/gptSearchSlice";
import { Shimmer } from "./Shimmer";

const GptSearchBar = () => {
  const searchContext = useRef(null); 
  const [gptPrompt, setGptPrompt] = useState("");
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false);
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
        "Act as a movie recommendation (don't give adultrated movies as suggestions) strictly follow the prompt and if any language is mentioned give movies only belong to that language origin and suggest some movies for the query: " +
        searchContext.current.value +
        ". Only give me names of 5 movies, comma separated , don't include any conjunctions like and/or.While giving movie names only give names don't give any sentences like i am happy to help and all don't even give here are 10 movies just give me the name";
      setGptPrompt(prompt);
    }
  };
  const makeApiCall = async () => {
    if (searchContext.current.value.length === 0) {
      setGptPrompt("");
      alert("Invalid input. Please enter a valid query.");
      return;
    }
     setLoading(true);
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
    console.log(result)
    dispatch(addGptResults({movienames:movieNames,results:result}));
    setLoading(false);
  };

  return (
    <div>
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
        {loading && <div className="text-white mt-4">Loading...</div>}
      </div>
      <p className=" text-white ml-96 text-sm w-1/2">
        NOTE:The data displayed here May or May not be relevent as tmdb api
        searches based on single keyword for the results provided by ai.""For example if you search for the movie maestro,it gives results of all movies which includes the word maestro"".Same applied to all prompts.
      </p>
    </div>
  );
};

export default GptSearchBar;
