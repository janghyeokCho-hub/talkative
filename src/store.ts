import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import reducer from "./modules";
import logger from "redux-logger";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
