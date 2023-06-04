import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { addTodo, removeTodo } from "./redux/actions/todoActions.js";
import { Provider } from "react-redux";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch(removeTodo({ id: 3 }));

// store.dispatch(
//   addTodo({
//     task: "created todo",
//     id: 3,
//     completed: true,
//   })
// );
// unsubscribe();
// store.dispatch(removeTodo({ id: 3 }));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
