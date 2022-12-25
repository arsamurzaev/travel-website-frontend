import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  
    basket: [],
    loading: false,
    error: null
}

const basketSlice = createSlice({
    name: "basket",
    initialState, 
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase()
    }
})

export default basketSlice.reducer