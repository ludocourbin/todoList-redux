import React from "react";
import "./style.scss";

const Counter = ({ count }) => {
  let message = count > 1 ? "tâches en cours" : "Tâche en cours";
  return (
    <div className="counter">
      {count} {message}
    </div>
  );
};

export default Counter;
