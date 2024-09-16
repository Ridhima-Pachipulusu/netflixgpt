import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies=createSlice({

    name:"movies",
    initialState:{
        list:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null
    },
    reducers:{
    addList:(state,action)=>{
        state.list=action.payload;
    },
    addPopular:(state,action)=>{
        state.popularMovies=action.payload;
    },
    addTopRated:(state,action)=>{
        state.topRated=action.payload;
    },
    addTrailer:(state,action)=>{
        state.trailerVideo=action.payload;
    }
}
})
export const {addList,addTrailer,addPopular,addTopRated}=nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;