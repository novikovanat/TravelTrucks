import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload);
    },
    deleteFromFavorite(state, action) {
      const index = state.findIndex(
        (entrie) => entrie.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoritesSlice.actions;
export const favoritesRedusers = favoritesSlice.reducer;
