import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    success: false,
    contacts: null,
}


export const contactSlice = createSlice({
    name: 'contactMessage',
    initialState,
    reducers: {
        clearState: (state) => {
            state.error = null;
            state.success = false;
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(contactMessage.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(contactMessage.fulfilled,(state,action)=>{
            state.loading = false;
            state.success = true;
        });
        builder.addCase(contactMessage.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload  
        })


        builder.addCase(getAllContact.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(getAllContact.fulfilled,(state,action)=>{
            state.loading = false;
            state.contacts = action.payload;
        });
        builder.addCase(getAllContact.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
            
        })
    }
});

export const contactMessage = createAsyncThunk('contactMessage', async(apiData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post("http://localhost:3036/api/v1/contact", apiData);
        return data;
    } catch (error) {
        console.log(error)
        return rejectWithValue('Error Occured During Signup')
    }
});

export const getAllContact = createAsyncThunk('getAllContact', async(apiData, {rejectWithValue}) => {
    try {
        const { data } = await axios.get("http://localhost:3036/api/v1/contact", apiData);
        return data;
    } catch (error) {
        return rejectWithValue('Error Occured During Fetching Contact')
    }
})


export const { clearState } = contactSlice.actions;
export default contactSlice.reducer;