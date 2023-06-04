import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import reducer, { addTodo, isLoading } from "./redux/reducers/todoReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import TodoInput from "./component/todoInput/todoInput";
import List from "./component/listTodos/list";

function App(props) {
  return (
    <>
      <TodoInput />
      <List />
    </>
  );
}

export default App;
