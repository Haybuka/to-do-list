import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

export const reducers = combineReducers({ todos: todoReducer });
// export const reducers = combineReducers({ todos: todoReducer,projectsReducer : [] });


//we can wrap multiple combines => MOSH (Designing store)