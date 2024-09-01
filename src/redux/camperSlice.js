import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations";

function setRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

function setPending(state) {
  state.isLoading = true;
  state.error = null;
}

const camperSlice = createSlice({
  name: "campers",
  initialState: { campers: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, setPending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
      })
      .addCase(fetchAllCampers.rejected, setRejected);
  },
});

const camperReducer = camperSlice.reducer;
export default camperReducer;
