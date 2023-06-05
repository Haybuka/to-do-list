import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "./list.module.css";
import Button from "../button/button";
import { removeTodo, toggleCompleted } from "../../redux/reducers/todoReducer";

const List = () => {
  const todos = useSelector((state) => state.reducers.todos.todos);
  const [items, setItems] = useState(todos);
  // console.log(todos)
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeTodo(item));
  };
  let grid = items.length;

  const handleCheckState = (task) => {
    dispatch(toggleCompleted(task));
  };

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(items, result.source.index, result.destination.index);
    dispatch(reorderTodo(items));
    setItems(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            className={styles.list}
          >
            {todos.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    className={styles.list_item}
                    key={item.id}
                  >
                    <aside className={styles.textfield}>
                      <input
                        type="checkbox"
                        value={item.completed}
                        checked={item.completed}
                        onChange={() => handleCheckState(item)}
                      />
                      <p className={item.completed ? styles.strikethrough : ""}>
                        {item.task}
                      </p>
                    </aside>
                    <aside>
                      <Button text="Edit" />
                      <Button
                        text="Delete"
                        handleClick={() => handleDelete(item)}
                      />
                    </aside>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
