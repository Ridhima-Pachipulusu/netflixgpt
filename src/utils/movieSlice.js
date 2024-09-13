import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies=createSlice({

    name:"movies",
    initialState:{
        list:null
    },
    reducers:{
    addList:(state,action)=>{
        state.list=action.payload;
    }}
})
const {addList}=nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;