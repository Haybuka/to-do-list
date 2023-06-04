import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./list.module.css";
import Button from "../button/button";
import { removeTodo, toggleCompleted } from "../../redux/reducers/todoReducer";

const List = () => {
  const todos = useSelector((state) => state.reducers.todos.todos);
  const dispatch = useDispatch();
  const handleDelete = (task) => {
    dispatch(removeTodo(task));
  };

  const handleCheckState = (task) => {
    dispatch(toggleCompleted(task));

  };
  return (
    <ul className={styles.list}>
      {todos.map((task) => (
        <li className={styles.list_item} key={task.id}>
          <aside className={styles.textfield}>
            <input
              type="checkbox"
              value={task.completed}
              checked={task.completed}
              onChange={() => handleCheckState(task)}
            />
            <p className={task.completed ? styles.strikethrough : ""}>
              {task.task}
            </p>
          </aside>
          <aside>
            <Button text="Edit" />
            <Button text="Delete" handleClick={() => handleDelete(t)} />
          </aside>
        </li>
      ))}
    </ul>
  );
};

export default List;
