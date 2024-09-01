import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async (_, thunkAPI) => {
    try {
      const respose = await axios.get("/");
      return respose.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
