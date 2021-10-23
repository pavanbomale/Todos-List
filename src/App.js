import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    SetTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
       sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      title: title,
      desc: desc,
      sno: sno,
    }
    SetTodos([...todos, myTodo])
  }

  const [todos, SetTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Header title="MY TODOS LIST"/>           
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </>
  );
}

export default App;