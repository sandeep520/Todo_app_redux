// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

//   class TodoClass extends Component {
//       constructor();
//       super();

//   render() {
//     return (
//       <div>TodoClass</div>
//     )
//   }
// }

// export default TodoClass

import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import TodoItem from "../component/TodoItem";
class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      todoData: "",
    };
  }
  //   componentDidMount() {
  //     this.props.listTodo();
  //   }

  handelChange = (e) => {
    this.setState({ todoData: e.target.value });
  };

  saveTodo = () => {
    this.props.addTodo({ id: 4, type: this.state.todoData });
    // this.setState({ todoData: "" });
    console.log(this.state.todoData);
    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          action: this.state.list, done:false,
        },
      ],
    });
    //  action.payload]
    // console.log(data)
  };

  render() {
    return (
        <>
      <div className="container">
        <h1>Add Todo</h1>

        <p>
          <input
            type="text"
            onChange={this.handelChange}
            // value={this.state.todoData}
            placeholder={"Add todo"}
          />
          <button onClick={() => this.saveTodo()}>Save</button>
        </p>
       
      </div>
      <div>
      <h1>List Todo</h1>
        <ul>
          {/* {this.state.todoData} */}
          {
            this.state.list.map((item) => {
              return (
               <p>{item.action}</p>
              );
            })}
        </ul>
      </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    todoState: state.todoList,
  };
}
export default connect(mapStateToProps, { addTodo })(TodoClass);
