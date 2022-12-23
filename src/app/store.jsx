import { configureStore } from "@reduxjs/toolkit";
import organizationSlice from "../slices/organization.slice";

export const store = configureStore({
    reducer: organizationSlice
})