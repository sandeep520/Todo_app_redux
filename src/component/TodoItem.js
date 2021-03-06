import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/index";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    dispatch(deleteTodo(id));
    event.preventDefault();
    console.log(handleDelete);
  };

  //   const hanldeToggle = () => {
  //     dispatch(toggleTodo(id));
  //   };

  return (
    <li
      // style={styled}
      className="list-group-item text-capitalize d-flex justify-content-between my-2"
    >
      <h6>
        {/* {id} : {text} */}
        {text}
      </h6>
      <div className="todo-icon">
        {/* <span className="mx-2 text-success">
          <i
            className="fas fa-check-circle"
            
            onClick={hanldeToggle}
          />
        </span> */}
        <button className="mx-2 text-danger"
           onClick={handleDelete}> 
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

{
  /* <div className="todo-icon">
        <span className="mx-2 text-success">
          <i
            className="fas fa-check-circle"
            onMouseEnter={e => changeBackground(e, "groove")}
            onMouseLeave={e => changeBackground(e, "none")}
            onClick={hanldeToggle}
          />
        </span>
        <span className="mx-2 text-danger">
          <i
            className="fas fa-trash"
            onMouseEnter={e => changeBackground(e, "groove")}
            onMouseLeave={e => changeBackground(e, "none")}
            onClick={handleDelete}
          />
          </span>
        </div> */
}
