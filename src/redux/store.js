import { configureStore } from "@reduxjs/toolkit";
import camperRducers from "./camperSlice";
import filtersRedusers from "./filtersSlice";
import { favoritesRedusers } from "./favoriveSlice";

const store = configureStore({
  reducer: {
    // campers: camperRducers,
    // filters: filtersRedusers,
    favorites: favoritesRedusers,
  },
});

export default store;
