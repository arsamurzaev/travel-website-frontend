import { configureStore } from "@reduxjs/toolkit"

import basketSlice from "./features/basket.slice"
import commentSlice from "./features/comment.slice"
import tourSlice from "./features/tourSlice"
import userDataSlice from "./features/userDataSlice"


export const store = configureStore({
    reducer:{
        userData: userDataSlice,
        tours: tourSlice,
        basket: basketSlice,
        comments: commentSlice
    }
})