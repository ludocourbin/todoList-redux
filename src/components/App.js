import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

import "./style.css";
const App = () => (
  <div className="app">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
