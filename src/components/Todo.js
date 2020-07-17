import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({
  onClick,
  completed,
  favoris,
  text,
  handleDelete,
  handleFavoris,
}) => {
  const isCompleted = completed ? "todo todo--done" : "todo";
  return (
    <li
      className={isCompleted}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <input onChange={onClick} type="checkbox" checked={completed} />
      <span className="todo-text">{text}</span>
      <span onClick={handleFavoris}>
        {favoris ? (
          <FaHeart className="todo-favoris" />
        ) : (
          <FaHeartBroken className="todo-notFav" />
        )}
      </span>
      <span onClick={handleDelete} className="todo-delete">
        <AiFillDelete />
      </span>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
