import React, { useState } from "react";
import styles from "./todoInput.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todoReducer";
import Button from "../button/button";

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
        completed: true,
      })
    );
    setTodoValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} value={todoValue} onChange={handleChange} type="text" placeholder="Input task"/>
      <Button text="Add to list" />
    </form>
  );
};

export default TodoInput;
