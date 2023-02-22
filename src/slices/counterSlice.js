import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState: {
        count:0,
    },
    name: 'counter',
    reducers: {
        increase: (state) =>{
            state = {count:state.count + 1}
            return state
        },
        decrease: (state) =>{
            state = {count:state.count > 0 && state.count - 1}
            // setCount(count - 1)
            return state
        }
    }
})

export const counterReducer = counterSlice.reducer
export const {increase,decrease} = counterSlice.actions