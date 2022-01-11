import './App.css';
import Header from "./MyComponents/Header"; /* Importing child file*/
import { AddTodos } from "./MyComponents/AddTodos";
import { About } from "./MyComponents/About";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // initTodo contains array of todoItems
  let initTodo = [];
  let todoJson = localStorage.getItem("todos");

  if (todoJson === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(todoJson);
  }


  // Delete Todo function
  const onDeleteFunc = (todo) => {
    console.log("I am onDelete() of ", todo);

    /*
    finding index of current todo and deleting it would not work in react here we have to use setTodos function which is used to update these todos
    let idx = todos.indexOf(todo);
    todos.splice(idx, 1);
    */

    // setTodos(setState)  -> show only those todos on webPage which are not equal to current todo
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    // saving data to browser's local storage
    let todoJson = JSON.stringify(todos);
    localStorage.setItem("todos", todoJson);
  }


  // adding Todo function
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }


    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]); //---> This line concatenates todos array and myTodo object
  }

  // state and setState also defines how the things should render on web page unlike , props it does not passed it is rendered within the component
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    // saving data to browser's local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        {/* sending data to child like {title} to Header.js file */}
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDeleteFunc} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;

