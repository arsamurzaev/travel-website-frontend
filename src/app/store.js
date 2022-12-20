import { configureStore } from "@reduxjs/toolkit"
import userDataSlice from "./features/userDataSlice"
export const store = configureStore({
    reducer:{
        userData: userDataSlice
    }
})