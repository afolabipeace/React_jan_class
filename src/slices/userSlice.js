import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    initialState:{
        firstname:'Afolabi',
        lastname:'Peace',
        email:'peaceafolabi04@gmail.com'
    },
    name:'profile',
    reducers:{
        setProfile:(state, {payload})=>{
            state = {...state, ...payload}
            return state;
        }
    }

})

export const userReducer = userSlice.reducer
export const {setProfile} = userSlice.actions