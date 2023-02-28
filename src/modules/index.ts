import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import mainlayer from "@/modules/mainlayer";
import socket from "@/modules/socket";

const rootReducer = combineReducers({
  mainlayer,
  socket,
});

export function* rootSaga() {
  yield all([
    // add sagas here
  ]);
}

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
