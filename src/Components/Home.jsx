import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Home.module.css";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const newTodoData = (todo) => {
    setTodos((previousTodo) => {
      return [...previousTodo, { id: uuidv4(), todo }];
    });
  };
  // console.log(todos);
  const onDeleteTodo = (id) => {
    setTodos((previousTodo)=>{
      const currentTodo = previousTodo.filter((todo) => todo.id != id);
      return currentTodo
    })
  };
  return (
    <div className={style.container}>
      <h1 className={style.todoTitle}>Todo App</h1>
      <NewTodo onTodoData={newTodoData} />
      <Todos todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default Home;
