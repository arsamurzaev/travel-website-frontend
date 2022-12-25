import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    tours: [],
    loading: false,
    error: null
}
export const addTour = createAsyncThunk("create/tour", async (data, thunkAPI )=>{
    try {
        const res = await fetch('')
        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
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

//GET TOUR ================================================================
        .addCase(fetchTour.fulfilled, (state, actions)=>{
            state.tours = actions.payload
            state.loading = false
            state.error = null
        })
        .addCase(fetchTour.rejected, (state, actions)=>{
            state.error = actions.payload
            state.loading = false
        })
        .addCase(fetchTour.pending, (state, actions)=>{
            state.loading = true
            state.error = false
        })
    }
})


export default tourSlice.reducer