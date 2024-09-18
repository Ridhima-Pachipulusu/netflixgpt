import { createSlice } from "@reduxjs/toolkit";

const GPTSearch=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        gptPageDisplay:(state)=>{
            state.showGptPage=!state.showGptPage
        },
        addGptResults:(state,action)=>{
            const {movienames,results}=action.payload;
            state.movieResults=results;
            state.movieNames=movienames;
        }
    }
})
export const {gptPageDisplay,addGptResults}=GPTSearch.actions;
export default GPTSearch.reducer;