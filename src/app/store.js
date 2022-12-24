import { configureStore } from "@reduxjs/toolkit"
import tourSlice from "./features/tourSlice"
//store
import userDataSlice from "./features/userDataSlice"
export const store = configureStore({
    reducer:{
        userData: userDataSlice,
        tours: tourSlice
    }
})