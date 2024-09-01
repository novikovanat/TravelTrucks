import { createSlice } from "@reduxjs/toolkit";

const camperSlice = createSlice({
  name: "campers",
  initialState: { campers: [], isLoading: false, error: null },
  extraReducers: (builder)=>{
    builder
    .addCase();
  }
});


const camperRducers = camperSlice.reducer
export default camperRducers;