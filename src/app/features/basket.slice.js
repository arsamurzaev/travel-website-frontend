import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  basket: [],
  loading: false,
  error: null,
};
export const fetchBasket = createAsyncThunk(
  "get/basket",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/get/basket");
      const basket = await res.json();

      if (basket.error) {
        return thunkAPI.rejectWithValue(basket.error);
      }
      return thunkAPI.fulfillWithValue(basket);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBasket = createAsyncThunk(
  "addBasket",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/update/basket", {
        method: "PATCH",
        body: JSON.stringify({ toursId: data }),
        headers: {
          "Content-type": "application/json",
          // Authorization:нужно передать token
        },
      });
      const tour = await res.json();

      if (tour.error) {
        return thunkAPI.rejectWithValue(tour.error);
      }
      return thunkAPI.fulfillWithValue(tour);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTourBasket = createAsyncThunk(
  "patch/deleteTour",
  async (data, thunkAPI) => {
    const res = await fetch("http://localhost:4000/delete/tours/basket", {
      method: "PATCH",
      body: JSON.stringify({ toursId: data }),
      headers: {
        "Content-type": "application/json",
        //Authorization: token
      },
    });
    const tour = await res.json();
    if (tour.error) {
      return thunkAPI.rejectWithValue(tour.error);
    }
    return thunkAPI.fulfillWithValue(tour);
  }
);
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET BASKET=========================================================================
      .addCase(fetchBasket.fulfilled, (state, actions) => {
        state.basket = actions.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBasket.rejected, (state, actions) => {
        state.error = actions.payload;
        state.loading = false;
      })
      .addCase(fetchBasket.pending, (state, _) => {
        state.error = null;
        state.loading = true;
      })
      // ADDTOUR BASKET ============================================================================
      .addCase(addBasket.fulfilled, (state, actions) => {
        state.basket.tours.push({ toursId: actions.payload });
        state.loading = false;
        state.error = null;
      })
      .addCase(addBasket.rejected, (state, actions) => {
        state.error = actions.payload;
        state.loading = false;
      })
      .addCase(addBasket.pending, (state, _) => {
        state.loading = true;
        state.error = false;
      })
      // =======================================================

      //DELETE_TOUR_BASKET ===================================================
      .addCase(deleteTourBasket.fulfilled, (state, actions) => {
        state.basket = actions.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(deleteTourBasket.pending, (state, actions) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTourBasket.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
});

export default basketSlice.reducer;
