import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './reducers/index';
import TodoClass from './ClassComponent/TodoClass';



const store = createStore(rootReducer);


function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            {/* <h1 className="text-capitalize text-center">Kelvin Todo List</h1> */}
            <TodoInput />
            <TodoList />
            {/* <TodoClass/> */}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
