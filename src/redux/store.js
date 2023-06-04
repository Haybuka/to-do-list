import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";


import { createLogger } from "redux-logger";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";

import { reducers } from "./reducers";

const logger = createLogger();
const composedEnhancer = composeWithDevTools(
  applyMiddleware(logger),
//   devToolsEnhancer({ trace: true })
);

const store = configureStore({reducer:{reducers}, composedEnhancer});
//
export default store;
