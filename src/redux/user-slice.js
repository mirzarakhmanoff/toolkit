import { createSlice } from "@reduxjs/toolkit";
import { saveStorege, getStorage } from "../components/helpers";

const user = createSlice({
  name: "user",
  initialState: {
    value: getStorage("user"),
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      saveStorege("user", state.value);
    },
    deleteUser: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.value.length) {
        state.value.splice(index, 1);
        saveStorege("user", state.value);
      }
    },
  },
});

export const { add, deleteUser } = user.actions;
export default user.reducer;
