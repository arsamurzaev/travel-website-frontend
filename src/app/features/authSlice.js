import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    signUp: false,
    signIn: false,
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
};

export const authSignUp = createAsyncThunk(
    "auth/signup",
    async ({ mail, password, name, secondName, lastName,firstName }, thunkAPI) => {
        console.log(mail, password, name, secondName, lastName);
        try {
            const res = await fetch("http://localhost:4000/add/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mail, password, name, secondName, lastName,firstName  }),
            });

            const json = await res.json();

            if (json.error) {
                return thunkAPI.rejectWithValue(json.error);
            }
            return thunkAPI.fulfillWithValue(json);
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
);


const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authSignUp.pending, (state, action) => {
                state.signUp = false;
                state.error = null;
                console.log(action);
            })
            .addCase(authSignUp.rejected, (state, action) => {
                state.signUp = false;
                state.error = action.payload;
                console.log(action);
            })
            .addCase(authSignUp.fulfilled, (state, action) => {
                state.signUp = true;
                state.error = null;
                console.log(action);
            })

    },
});

export default applicationSlice.reducer;