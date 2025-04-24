import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    likedItems: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const place = action.payload;
      const exists = state.likedItems.find((item) => item.name === place.name);

      if (exists) {
        state.likedItems = state.likedItems.filter((item) => item.name !== place.name);
      } else {
        state.likedItems.push(place);
      }
    },
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;
