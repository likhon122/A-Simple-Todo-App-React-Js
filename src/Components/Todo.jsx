import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import style from "./Todo.module.css";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const deleteTodo = (id) => {
    props.onDeleteTodo(id);
  };
  return (
    <article>
      <div className={style.allTodo}>
        <div>
          <h3 className={style.todoTitle}>{title}</h3>
          <p className={style.tododesc}>{desc}</p>
        </div>
        <div className={style.todoButton}>
          <button className={style.button} onClick={() => deleteTodo(id)}>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Todo;
