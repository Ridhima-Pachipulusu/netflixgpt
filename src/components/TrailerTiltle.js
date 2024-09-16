import { info, play } from "../utils/Constants";

export const TrailerTitle=({title,overview})=>{
    return (
      <div className=" absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
        <div className=" pt-72 ml-20">
          <h1 className=" text-5xl">{title}</h1>
          <p className="w-1/3 mt-3">{overview}</p>
        </div>
        <div className=" mt-8 ml-20 flex">
          <button className="  rounded-md flex items-center bg-slate-50 font-bold py-3 px-8 text-black hover:bg-opacity-80">
            {play}
            <span>play</span>
          </button>
          <button className=" rounded-md flex items-center text-white  bg-slate-500 font-bold py-3 px-8 ml-7 hover:bg-opacity-80">
            {info}
            <span className=" ml-2">More Info</span>
          </button>
        </div>
      </div>
    );
}