import { applyMiddleware } from "redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import {createLogger} from "redux-logger";

const logger = createLogger()

const store = createStore(reducer,applyMiddleware(logger));

export default store