import { combineReducers } from "redux";

// import counter from "./counter";
import todos from "../reducers/todos";

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
