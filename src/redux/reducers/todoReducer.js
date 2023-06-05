import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
};

const slice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    isLoading: (state) => {state.isLoading = !state.isLoading},
    addTodo: (state, action) => {

    //  let updatedState = {
    //     ...state,
    //     todos : [{
    //       task: action.payload.task,
    //       id: action.payload.id,
    //       completed: action.payload.completed,
    //     },...state.todos]
    //   }

      let newState = []
      newState.push({
        task: action.payload.task,
        id: action.payload.id,
        completed: action.payload.completed,
      })

      let spreadState = [...newState,...state.todos]
      // console.log(updatedState)
state.todos = spreadState
      // state.todos.push({
      //   task: action.payload.task,
      //   id: action.payload.id,
      //   completed: action.payload.completed,
      // });
    },
    removeTodo: (state, action) => {
      let newTodo = state.todos.filter((todo) => todo.id != action.payload.id);
      state.todos = newTodo;
    },
    toggleCompleted : (state,action) => {
      let newTodo = state.todos.map((todo) => todo.id === action.payload.id ? {...todo,completed : !todo.completed}: todo)
      state.todos = newTodo
    },
    reorderTodo : (state,action) => {
      console.log(action.payload)
      // state.todos = action.payload.
    }
  },
});

export const { isLoading,addTodo, removeTodo,toggleCompleted,reorderTodo } = slice.actions;
export default slice.reducer;
