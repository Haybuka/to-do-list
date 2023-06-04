import React from "react";
import TodoInput from "./todoInput/todoInput";
import List from "./listTodos/list";
import styles from './todo.module.css'
const Todo = () => {
  return (
    <section className={styles.container}>
      <TodoInput />
      <List />
    </section>
  );
};

export default Todo;
