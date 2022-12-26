import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/comments");
      const data = await response.json(); 
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addReview = createAsyncThunk(
  "review/addReview",
  async ({ star, review, id }, thunkAPI) => {
    const token = thunkAPI.getState().user.token;
    try {
      const response = await fetch(`http://localhost:3001/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ stars: star, text: review }),
      });
      const data = await response.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    loading: false,
    error: null,
    success: false,
    comments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getComments, (state, action) => {
        state.loading = true;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = state.action;
      });
  },
});

export default commentsSlice.reducer;