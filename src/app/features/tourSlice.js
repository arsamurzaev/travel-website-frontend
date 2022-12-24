import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    tours: [],
    loading: false,
    error: null
}
export const createTour = createAsyncThunk("create/tour", async (data, thunkAPI )=>{
    try {
        
    } catch (error) {
        
    }
})

export const fetchTour = createAsyncThunk("get/tour", async(_, thunkAPI)=>{
    try {
        const res = await fetch("http://localhost:4000/get/tours")
        const tours = await res.json()
        if(tours.error){
            return thunkAPI.rejectWithValue(tours.error)
        }
        return thunkAPI.fulfillWithValue(tours)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const tourSlice = createSlice({
    name: "tours",
    initialState, 
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTour.fulfilled, (state, actions)=>{
            state.tours = actions.payload
        })
    }
})


export default tourSlice.reducer