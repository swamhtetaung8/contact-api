import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import { contactApi } from "./services/contactApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);
