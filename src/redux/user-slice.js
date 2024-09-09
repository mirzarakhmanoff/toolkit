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
  },
});

export const { add } = user.actions;
export default user.reducer;
