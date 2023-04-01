import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: {
    data: [],
    keyValue: [],
  },
  reducers: {
    addData(state, action) {
      state.data.unshift(action.payload);
    },
    editData(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = action.payload;
    },
    deleteData(state, action) {
      const index = state.data.findIndex((item) => item.id === action.payload);
      state.data.splice(index, 1);
    },
    setData(state, action) {
      for (let Data in action.payload) {
        let temp = action.payload[Data];
        temp.key = Data;
        state.data.push(temp);
      }
      state.data.sort((a, b) => b.timestamp - a.timestamp);
    },
  },
});

export default data.reducer;

export const dataActions = data.actions;
