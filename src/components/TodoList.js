import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

import "./style.scss";

const TodoList = ({ todos, toggleTodo, deleteTodo, toggleFavoris }) => (
  <ul className="todos">
    {todos.map((todo) => {
      const completed = todo.completed ? "todo todo--done" : "todo";
      return (
        <Todo
          className={`${completed}`}
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          handleDelete={() => deleteTodo(todo.id)}
          handleFavoris={() => toggleFavoris(todo.id)}
        />
      );
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
