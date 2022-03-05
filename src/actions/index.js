import { ADD_TODO, DELETE_TODO } from "../actions/Actions";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

// export const todoList = (text) => {
//   return {
//     type: TODO_LIST,
//     text,
//   };
// };




export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

