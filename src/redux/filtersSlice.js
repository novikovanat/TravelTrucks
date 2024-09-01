import { createSlice } from "@reduxjs/toolkit";
import {vehicleType} from "./constans"

const filtersSlice = createSlice({
    name:'filters',
    initialState:{
        location: "",
        features: [], 
        type: vehicleType.all
    },
    extraReducers: (builder)=>{
        builder
        .addCase();
    }
})


const filtersRedusers = filtersSlice.reducer;
export default filtersRedusers;