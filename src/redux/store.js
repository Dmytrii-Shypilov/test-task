import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './slice'

export const store = configureStore({
    reducer: jobsReducer
})