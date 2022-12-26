import { configureStore } from "@reduxjs/toolkit"
//store
import userDataSlice from "./features/userDataSlice"
import organizationSlice from "./features/organization.slice";
import applicationSlice from './features/authSlice'

export const store = configureStore({
    reducer:{
        userData: userDataSlice,
        reducer: organizationSlice,
        authSlice: applicationSlice
    }
})