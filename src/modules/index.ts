import { combineReducers } from "redux";
import mainlayer from "@/modules/mainlayer";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  mainlayer,
});

export function* rootSaga() {
  yield all([
    // add sagas here
  ]);
}

export default rootReducer;
