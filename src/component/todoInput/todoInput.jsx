import React, { useState } from "react";
import styles from "./todoInput.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todoReducer";

const TodoInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTodoValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        task: todoValue,
        id: Math.floor(Math.random() * 100),
        completed: false,
      })
    );
    setTodoValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={todoValue} onChange={handleChange} type="text" />
      <button>Add to list</button>
    </form>
  );
};

export default TodoInput;
