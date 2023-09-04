import React from "react";
import style from "./Todos.module.css";

import Todo from "./Todo";
const Todos = (props) => {
  return (
    <section className={style.TodoBody}>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onDeleteTodo={props.onDeleteTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
