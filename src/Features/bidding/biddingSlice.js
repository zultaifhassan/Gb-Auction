import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    error: null,
    success: null
}

export const bidSlice = createSlice({
    name: "bids",
    initialState,
    reducers: {
      clearState: (state) => {
        state.error = null;
        state.success = false;
      },
    },

    extraReducers: (builder) => {
        builder
           .addCase(createBids.pending, (state) => {
                state.loading = true;
            })
           .addCase(createBids.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
           .addCase(createBids.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})


export const createBids = createAsyncThunk(
    "bids",
    async (apiData, { rejectWithValue }) => {
      try {
        const { data } = await axios.post(
          "http://localhost:3036/api/v1/bid",
          apiData.data,{
            headers:{
                Authorization: "Bearer " + apiData.token
            }
          }
        );
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


  export const { clearState } = bidSlice.actions;
export default bidSlice.reducer