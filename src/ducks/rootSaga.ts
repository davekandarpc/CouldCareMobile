import { all } from "redux-saga/effects";
import AuthWatcher from "./Auth/saga";

export const rootSaga = function* rootSaga() {
  yield all([AuthWatcher()]);
};

