import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    initialState:{
        answer:''
    },
    name:'Question',
    reducers:{
        pick:(state,{payload})=>{
            state= {...state,...payload}
            return state;
        }
    }
})

export const QuestionReducer = questionSlice.reducer
export const {pick} = questionSlice.actions