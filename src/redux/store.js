import { applyMiddleware } from "redux";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers/todoReducer";
import { createLogger } from "redux-logger";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";

const logger = createLogger();
const composedEnhancer = composeWithDevTools(
  applyMiddleware(logger),
//   devToolsEnhancer({ trace: true })
);
const store = configureStore({reducer:{reducer}, composedEnhancer});
//
export default store;
