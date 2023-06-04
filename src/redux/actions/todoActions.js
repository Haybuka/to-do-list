import * as ActionTypes from "../types/actionTypes";

export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: ActionTypes.REMOVE_TODO,
  payload,
});

export const isLoading = () => ({
  type: ActionTypes.IS_LOADING,
});
