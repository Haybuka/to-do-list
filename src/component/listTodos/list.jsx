import React from "react";
import { useSelector } from "react-redux";

import styles from "./list.module.css";

const List = () => {
  const todos = useSelector((state) => state.reducers.todos.todos);

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>{t.task}</li>
      ))}
    </ul>
  );
};

export default List;
