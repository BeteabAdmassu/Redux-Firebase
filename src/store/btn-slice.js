import { createSlice } from "@reduxjs/toolkit";


const btnClicked = createSlice({
    name: "btnClicked",
    initialState: {
      addBtnValue: false,
      editBtnValue: false,
      deleteBtnValue: false,
      tempId: 0
    },
  
    reducers: {
      addBtnClicked(state) {
        state.addBtnValue = !state.addBtnValue;
      },
      editBtnClicked(state, action) {
        state.editBtnValue = !state.editBtnValue;
        state.tempId = action.payload;
      },
      deleteBtnClicked(state, action) {
        state.deleteBtnValue = !state.deleteBtnValue;
        state.tempId = action.payload;
      },
    },
  });


export default btnClicked;
export const btnValue = btnClicked.actions;

  