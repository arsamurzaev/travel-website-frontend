import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addOrganization = createAsyncThunk(
  "organization/post",
  async ({ login, password, requisites, contacts, image }, thunkAPI) => {
    const formData = new FormData();
    formData.append("login", login);
    formData.append("password", password);
    formData.append("requisites", JSON.stringify(requisites));
    formData.append("contacts", JSON.stringify(contacts));
    formData.append("img", image);
    try {
      console.log(formData);
      const response = await fetch("/organization", {
        method: "POST",
        body: formData,
      });
      const add = await response.json();
      return add;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getOrganization = createAsyncThunk(
  "organization/get",
  async (_, thunkAPI) => {
    try {
      const responseGet = await fetch("/organization");
      const organ = await responseGet.json();
      return organ  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteOrganization = createAsyncThunk(
  "organization/delete",
  async (_id, thunkAPI) => {
    try {
      const responseDelete = await fetch(
        `/organization${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const delet = await responseDelete.json();
      return delet;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const organizationSlice = createSlice({
  name: "organization",
  initialState: {
    organizations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        addOrganization.fulfilled((state, action) => {
          state.organizations.push(action.payload);
        })
      )
      .addCase(
        addOrganization.rejected((state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
      )
      .addCase(
        addOrganization.pending((state, action) => {
          state.loading = true;
          state.error = null;
        })
      )
      .addCase(
        getOrganization.fulfilled((state, action) => {
          state.organizations = action.payload;
        })
      )
      .addCase(
        getOrganization.rejected((state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
      )
      .addCase(
        getOrganization.pending((state, action) => {
          state.loading = true;
          state.error = null;
        })
      )
      .addCase(
        deleteOrganization.fulfilled((state, action) => {
          state.organizations = action.payload;
        })
      )
      .addCase(
        deleteOrganization.rejected((state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
      )
      .addCase(
        deleteOrganization.pending((state, action) => {
          state.loading = true;
          state.error = null;
        })
      );
  },
});

export default organizationSlice.reducer;
