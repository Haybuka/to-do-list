import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [placeholder, setPlaceholder] = useState("Create a new todo");
  const [todoItems, setTodoItems] = useState([]);
  const [error, setError] = useState(false);
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.length > 1) {
      setError(false);

      let newTask = {
        task,
        id: Math.floor(Math.random() * 100),
        completed: false,
      };

      setTodoItems([newTask, ...todoItems]);
    } else {
      setError(true);
    }

    setTask("");
  };

  const handleDelete = (task) => {
    const newTodo = todoItems.filter((item) => item.id != task.id);
    setTodoItems(newTodo);
  };

  const handleComplete = (task) => {
    const newTodo = todoItems.map((item) =>
      item.id === task.id ? { ...item, completed: !item.completed } : item
    );
    setTodoItems(newTodo);
  };

  return (
    <section className="w-[600px] mx-auto my-10 px-10 ">
      <form
        className=" py-4 flex justify-between items-center"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleInputChange}
          name="task"
          className="py-3 px-2 w-3/4 bg-gray-200 capitalize outline-none"
          placeholder={placeholder}
          onFocus={() => setPlaceholder("Currently Typing")}
          onBlur={() => {
            setError(false);
            setPlaceholder("Create a new Todo");
          }}
          value={task}
        />
        <button className="py-3 px-2 border w-1/4 uppercase rounded-lg bg-black text-white mx-1">
          add
        </button>
      </form>
      {error && <p className="text-red-500">Cannot add empty list</p>}
      <ul>
        {todoItems.map((task) => (
          <li
            className="flex justify-between items-center border py-3 px-2 my-3"
            key={task.id}
          >
            <aside className="flex items-center">
              <input
                onChange={() => handleComplete(task)}
                checked={task.completed}
                type="checkbox"
                name="completed"
                id="completed"
              />

              <p className={task.completed ? "mx-2 line-through" : "mx-2"}>
                {task.task}
              </p>
            </aside>
            <div>
              <button className="mx-2 bg-gray-200 py-2 px-4 rounded-md">
                Edit
              </button>
              <button
                onClick={() => handleDelete(task)}
                className="mx-2 bg-gray-200 py-2 px-4 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
