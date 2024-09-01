import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations";

const camperSlice = createSlice({
  name: "campers",
  initialState: { campers: [], isLoading: false, error: null },
  extraReducers: (builder)=>{
    builder
    .addCase(fetchAllCampers.fulfilled, (state, action)=>{
        state.campers = action.payload;
    });
  }
});


const camperReducer = camperSlice.reducer
export default camperReducer;