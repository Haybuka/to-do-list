import * as ActionTypes from "../types/actionTypes";

const initialState = [];

export default function reducer  (state=initialState, action) {

  switch (action.type) {

    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
        ...action.payload
        },
      ];
    case ActionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id != action.payload.id);
    default:
      return state;
  }
};



// state.map( todo => todo.id !== action.payload.id ? todo : {...todo, completed : true})