import { configureStore } from "@reduxjs/toolkit"
import tourSlice from "./features/tourSlice"
//store
import userDataSlice from "./features/userDataSlice"
import organizationSlice from "./features/organization.slice";
import applicationSlice from './features/authSlice'

export const store = configureStore({
    reducer:{
        userData: userDataSlice,
        reducer: organizationSlice,
        authSlice: applicationSlice,
        tours: tourSlice,
    }
})