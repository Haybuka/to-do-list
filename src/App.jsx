import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, isLoading, removeTodo } from "./redux/actions/todoActions";
import reducer from "./redux/reducers/todoReducer";
import { connect } from "react-redux";

function App(props) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();


  dispatch(
    addTodo({
      task: "created todo",
      id: 3,
      completed: true,
    })
  );

  dispatch(isLoading());


  dispatch(
    removeTodo({
      task: "created todo",
      id: 3,
      completed: true,
    })
  );
  dispatch(isLoading());
console.log({props})
  return (
    <>
      <p>hi</p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer,
  };
};
export default App;
