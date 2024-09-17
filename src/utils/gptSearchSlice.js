import { createSlice } from "@reduxjs/toolkit";

const GPTSearch=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false
    },
    reducers:{
        gptPageDisplay:(state)=>{
            state.showGptPage=!state.showGptPage
        }
    }
})
export const {gptPageDisplay}=GPTSearch.actions;
export default GPTSearch.reducer;