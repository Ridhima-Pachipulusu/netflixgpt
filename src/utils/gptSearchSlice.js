import { createSlice } from "@reduxjs/toolkit";

const GPTSearch=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false,
        movieResults:null
    },
    reducers:{
        gptPageDisplay:(state)=>{
            state.showGptPage=!state.showGptPage
        },
        addGptResults:(state,action)=>{
            state.movieResults=action.payload
        }
    }
})
export const {gptPageDisplay,addGptResults}=GPTSearch.actions;
export default GPTSearch.reducer;