import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoItems, setTodoItems] = useState([
    { task: "Bought an orange", id: 1, completed: false },
  ]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    setTask("");
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
          className="py-3 px-2 w-3/4 bg-gray-200 capitalize"
          placeholder="enter task"
          value={task}
        />
        <button className="py-3 px-2 border w-1/4 uppercase rounded-lg bg-black text-white mx-1">
          add
        </button>
      </form>
      <ul>
        {todoItems.map((task) => (
          <li
            className="flex justify-between items-center border py-3 px-2"
            key={task.id}
          >
            <p>{task.task}</p>
            <div>
              <button className="mx-2 bg-gray-200 py-2 px-4 rounded-md">
                Edit
              </button>
              <button className="mx-2 bg-gray-200 py-2 px-4 rounded-md">
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
