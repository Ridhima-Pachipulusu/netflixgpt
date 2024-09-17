const GptSearchBar=()=>{
    return (
      <div className=" flex justify-center mt-28">
        <form className=" w-1/2  grid grid-cols-12">
          <input
            className=" rounded-md px-7 py-4 col-span-10 bg-gray-600 placeholder-white text-white"
            type="text"
            placeholder="What do you want to watch today??"
          />
          <button className=" text-white bg-red-600 border border-red-600 rounded-md w-20  ml-1">Submit</button>
        </form>
      </div>
    );
}
export default GptSearchBar;