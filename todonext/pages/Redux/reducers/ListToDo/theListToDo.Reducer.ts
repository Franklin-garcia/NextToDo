import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { ToDoInterface } from "./adToDo.interface";

export const theListToDoReducer = createSlice({
  initialState,
  name: "theListToDoReducer",
  reducers: {
    addOneToDo: (state, { payload }: PayloadAction<ToDoInterface>) => {
      state.myListToDo.push(payload);
    },
    deleteToDo: (state, { payload }: PayloadAction<number>) => {
      state.myListToDo.filter((item) => item._id != payload);
    },
  },
});

export default theListToDoReducer.reducer;
