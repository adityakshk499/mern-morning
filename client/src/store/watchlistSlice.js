import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    handleAdd(state, action) {
      const newstate = [...state];

      newstate.push(action.payload);

      return newstate;
    },
    handleRemove(state, action) {
      const newstate = [...state];
      const findIndex = (arr, id) => arr.findIndex((item) => item.id === id);
      const index = findIndex(newstate, action.payload.id);
      console.log(index);
      if (index !== -1) {
        newstate.splice(index, 1);
      }

      return newstate;
    },
  },
});

export const { handleAdd, handleRemove } = watchlistSlice.actions;
export default watchlistSlice.reducer;
