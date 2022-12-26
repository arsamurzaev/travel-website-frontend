import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHotels = createAsyncThunk("hotels/get", async (_, thunkAPI) => {
  try {
    const res = await fetch("/hotels");
    const hotels = await res.json();

    console.log(hotels);

    return thunkAPI.fulfillWithValue(hotels);
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const addHotel = createAsyncThunk(
  "hotels/add",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("/hotels", {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      const hotel = await res.json();

      thunkAPI.rejectWithValue(hotel);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  hotels: [],
  loading: false,
  error: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotels.fulfilled, (state, actions) => {
        state.hotels = actions.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getHotels.rejected, (state, actions) => {
        state.error = actions.payload;
        state.loading = false;
      })
      .addCase(getHotels.pending, (state, actions) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        addHotel.fulfilled((state, action) => {
          state.hotel.push(action.payload);
          state.error = null;
          state.loading = false;
        })
      )
      .addCase(
        addHotel.rejected((state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
      )
      .addCase(
        addHotel.pending((state, action) => {
          state.loading = true;
          state.error = null;
        })
      );
  },
});

export default hotelSlice.reducer;
