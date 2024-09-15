import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies=createSlice({

    name:"movies",
    initialState:{
        list:null,
        trailerVideo:null
    },
    reducers:{
    addList:(state,action)=>{
        state.list=action.payload;
    },
    addTrailer:(state,action)=>{
        state.trailerVideo=action.payload;
    }
}
})
export const {addList,addTrailer}=nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;