import React from "react";
import "./style.scss";

import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todos = ({ todos, handleCheck, deleteTodo, handleFavoris }) => (
  <ul className="todos">
    {todos.map((todo) => {
      const completed = todo.done ? "todo todo--done" : "todo";
      return (
        <li position={todo.position} key={todo.id} className={`${completed} `}>
          <input
            onChange={() => handleCheck(todo)}
            type="checkbox"
            checked={todo.done}
          />
          <span className="todo-text">{todo.label}</span>
          <span onClick={() => handleFavoris(todo)}>
            {todo.favoris ? (
              <FaHeart className="todo-favoris" />
            ) : (
              <FaHeartBroken className="todo-notFav" />
            )}
          </span>
          <span onClick={() => deleteTodo(todo)} className="todo-delete">
            <AiFillDelete />
          </span>
        </li>
      );
    })}
  </ul>
);

export default Todos;
