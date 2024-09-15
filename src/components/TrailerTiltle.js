
export const TrailerTitle=({title,overview})=>{
    return (
      <div className=" absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
        <div className=" pt-80 ml-12">
          <h1 className=" font-bold text-4xl">{title}</h1>
          <p className="w-1/4 mt-3">{overview}</p>
        </div>
        <div className=" mt-8 ml-12">
          <button className="  rounded-md  bg-slate-50 font-bold py-3 px-8 text-black hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className=" rounded-md text-white  bg-slate-500 font-bold py-3 px-8 ml-5 hover:bg-opacity-80">
            More Info
          </button>
        </div>
      </div>
    );
}