import {
    ADD_TODO,
    DELETE_TODO,
    // TODO_LIST
  } from "../actions/Actions";
  
  const initalState = {
    data: 0,
    list: []
  };
  
  const todos = (state = initalState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          data: state.data + 1,
          list: [
              ...state.list,
              { id: state.data, text: action.text, completed: false }
            ]
            // ...state,
            // list:[state.list,action.text]
        };
     

      case DELETE_TODO:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.id)
        };

        // case TODO_LIST:
        //       return { ...state, list: [...state.list, action.payload] };
             
      default:
        return state;
    }
  };
  
  export default todos;
  