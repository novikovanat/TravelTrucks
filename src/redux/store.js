import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./camperSlice";
import filtersRedusers from "./filtersSlice";
import { favoritesRedusers } from "./favoriveSlice";

const store = configureStore({
  reducer: {
    campers: camperReducer,
    // filters: filtersRedusers,
    favorites: favoritesRedusers,
  },
});

export default store;
