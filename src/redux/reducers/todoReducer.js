import * as ActionTypes from "../types/actionTypes";

const initialState = {
  todo: [],
  isLoading : false
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading:!state.isLoading,
      };
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case ActionTypes.REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id != action.payload.id),
      };
    default:
      return state;
  }
}

// state.map( todo => todo.id !== action.payload.id ? todo : {...todo, completed : true})
