import { configureStore } from "@reduxjs/toolkit"

import basketSlice from "./features/basket.slice"
import commentSlice from "./features/comment.slice"
import tourSlice from "./features/tourSlice"
import userDataSlice from "./features/userDataSlice"
import organizationSlice from "./features/organization.slice";
import applicationSlice from './features/authSlice'

export const store = configureStore({
    reducer:{
        userData: userDataSlice,
        reducer: organizationSlice,
        authSlice: applicationSlice,
        tours: tourSlice,
        basket: basketSlice,
        comments: commentSlice
    }
})