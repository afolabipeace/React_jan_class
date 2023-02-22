import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices/counterSlice'
import { QuestionReducer } from './slices/questionSlice'
import { userReducer } from './slices/userSlice'

const store = configureStore({
    reducer:{
        counter: counterReducer,
        profile: userReducer,
        Question:QuestionReducer
    }
})

export default store