// == Import npm
import React from "react";

// == Import

import Input from "../Input";
import Todos from "../Todos";
import Counter from "../Counter";

import "./styles.css";

import todos from "../../data/tasks";

import { uuid } from "uuidv4";

// == Composant
class App extends React.Component {
  state = {
    todosList: [],
    todoLabel: "",
    placeHolder: "Ajouter une tâche",
  };

  handleCheck = ({ id }) => {
    // const elementIndex = this.state.todosList.findIndex(
    //   (todoInList) => id === todoInList.id
    // );

    // let newTodos = [...this.state.todosList];
    // newTodos[elementIndex] = {
    //   ...newTodos[elementIndex],
    //   done: !newTodos[elementIndex].done,
    // };

    const newTodos = this.state.todosList.map((list) =>
      list.id === id ? { ...list, done: !list.done } : list
    );

    const sorted = this.sortTodos(newTodos);

    this.setState({
      todosList: sorted,
    });
  };

  handleChangeInput = (e) => {
    this.setState({
      todoLabel: e.target.value,
    });
  };

  addTodo = () => {
    const { todoLabel } = this.state;

    let newTodo = {
      id: uuid(),
      label: todoLabel,
      done: false,
      favoris: false,
      position: this.state.todosList.length,
    };

    let newTodos = [...this.state.todosList, newTodo];

    this.setState({
      todosList: newTodos,
      todoLabel: "",
    });
  };

  deleteTodo = (todoObject) => {
    const { todosList } = this.state;

    let filteredTodos = todosList.filter((todo) => {
      return todo !== todoObject;
    });

    const orderedTodos = filteredTodos.map((todo, index) => {
      return { ...todo, position: index };
    });

    this.setState({
      todosList: orderedTodos,
    });
  };

  handleFavoris = (todoObject) => {
    const elementIndex = this.state.todosList.findIndex(
      (todoInList) => todoObject.id === todoInList.id
    );

    let newTodos = [...this.state.todosList];

    newTodos[elementIndex] = {
      ...newTodos[elementIndex],
      favoris: !newTodos[elementIndex].favoris,
    };

    const sorted = this.sortTodos(newTodos);

    this.setState({
      todosList: sorted,
    });
  };

  countTodo = () => {
    const { todosList } = this.state;
    const notDoneTodo = todosList.filter((todo) => {
      return todo.done === false;
    });

    return notDoneTodo.length;
  };

  sortTodos = (todosList) => {
    const notDoneFav = todosList.filter((todo) => !todo.done && todo.favoris);
    const notDoneNotFav = todosList.filter(
      (todo) => !todo.done && !todo.favoris
    );
    const doneFav = todosList.filter((todo) => todo.done && todo.favoris);
    const doneNotFav = todosList.filter((todo) => todo.done && !todo.favoris);

    return [...notDoneFav, ...notDoneNotFav, ...doneFav, ...doneNotFav];
  };

  render() {
    const { todosList, placeHolder, todoLabel } = this.state;
    const {
      handleCheck,
      handleChangeInput,
      addTodo,
      deleteTodo,
      handleFavoris,
      countTodo,
      sortTodos,
    } = this;
    return (
      <div className="app">
        <Input
          addTodo={addTodo}
          placeHolder={placeHolder}
          value={todoLabel}
          handleChangeInput={handleChangeInput}
        />
        <Counter count={countTodo()} />
        <Todos
          todos={sortTodos(todosList)}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
          handleFavoris={handleFavoris}
        />
      </div>
    );
  }
}

// == Export
export default App;
