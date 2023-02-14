import { configureStore } from "@reduxjs/toolkit";
import  theListToDoReducer  from './reducers/ListToDo/theListToDo.Reducer';
export const store = configureStore({
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    reducer: {
      theListToDo: theListToDoReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;