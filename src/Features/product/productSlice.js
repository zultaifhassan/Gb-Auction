import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    product: null,
    success: false,
}


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearState: (state) => {
            state.error = null;
            state.success = false;
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(createProduct.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.success = true;
        });
        builder.addCase(createProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload  
        })


        // builder.addCase(getAllContact.pending,(state)=>{
        //     state.loading = true;
        // });
        // builder.addCase(getAllContact.fulfilled,(state,action)=>{
        //     state.loading = false;
        //     state.products = action.payload;
        // });
        // builder.addCase(getAllContact.rejected,(state,action)=>{
        //     state.loading = false;
        //     state.error = action.payload
            
        // })
    }
});

export const createProduct = createAsyncThunk(
    "createProduct",
    async (apiData, { rejectWithValue }) => {
      try {
        const { data } = await axios.post(
          "http://localhost:3036/api/v1/createproduct",
          apiData.data,
          {
            headers: {
              Authorization: `Bearer ${apiData.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        return data?.data;
      } catch (error) {
        console.log(error)
        if(error?.response?.status === 413){
          return rejectWithValue("File size too large")
        }
        if (error?.response?.data?.message) {
          return rejectWithValue(error?.response?.data?.message);
        } else {
          return rejectWithValue("Some error occured please try again later");
        }
      }
    }
  );

export default productSlice.reducer;