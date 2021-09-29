import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";



import Auth from "./Auth/reducer";

const sagaMiddleware = createSagaMiddleware();

import { rootSaga } from "./rootSaga";

const rootStore = combineReducers({ Auth });

const middleWares = [
  sagaMiddleware,
];
const store = createStore(rootStore, 
  composeWithDevTools(applyMiddleware(...middleWares )));
sagaMiddleware.run(rootSaga); 


export default store;
