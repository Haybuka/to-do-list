import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isLoading: false,
};

const slice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    isLoading: (state) => {state.isLoading = !state.isLoading},
    addTodo: (state, action) => {
      state.todo.push({
        task: action.payload.task,
        id: action.payload.id,
        completed: action.payload.completed,
      });
    },
    removeTodo: (state, action) => {
      let newTodo = state.todo.filter((todo) => todo.id != action.payload.id);
      state.todo = newTodo;
    },
  },
});

export const { isLoading,addTodo, removeTodo } = slice.actions;
export default slice.reducer;
