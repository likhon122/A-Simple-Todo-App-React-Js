import React, { useState } from "react";
import style from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const onChaneHandler = (e) => {
    const name = e.target.name;
    setTodo((previousTodo) => {
      return { ...previousTodo, [name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onTodoData(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          required
          className={style.input}
          onChange={onChaneHandler}
        />
      </div>
      <div>
        <label htmlFor="desc">Description: </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          required
          className={style.textarea}
          onChange={onChaneHandler}
        />
      </div>
      <button type="submit" className={style.addTodoButton}>
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
