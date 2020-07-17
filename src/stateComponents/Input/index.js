import React from "react";

import "./style.scss";

const Input = ({ addTodo, handleChangeInput, placeHolder, value }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={value}
        type="text"
        onChange={handleChangeInput}
        placeholder={placeHolder}
      />
    </form>
  );
};

export default Input;
