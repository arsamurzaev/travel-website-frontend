import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./features/tourSlice";
import organizationSlice from "./features/organization.slice";
import userDataSlice from "./features/userDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataSlice,
    tours: tourSlice,
    organization: organizationSlice,
  },
});
