import { createReducer } from "@reduxjs/toolkit";
import { addTodo, isLoading, removeTodo } from "../actions/todoActions";

const initialState = {
  todo: [],
  isLoading : false,
  bugs : []
};

export default createReducer(initialState,{
  //key : value
  //actions (can also leverage on type) : functions that handle the actions
  [isLoading.type] : (state,action) =>  !state.isLoading 
  ,
  addTodo : (state,action) => {
    state.todo.push(action.payload)
  },
  removeTodo : (state,action) => {
    state.todo.filter((todo) => todo.id != action.payload.id)
  },
  // bugResolved : (state,action) => {
  //   const index = state.bugs.findIndex(bug => bug.id === action.payload.id)
  //   state[index].resolved = true
  // }
})



// state.map( todo => todo.id !== action.payload.id ? todo : {...todo, completed : true})
