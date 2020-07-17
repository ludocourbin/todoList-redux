const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          favoris: false,
        },
      ];
    case "DELETE_TODO":
      console.log("hola");
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "TOGGLE_FAVORIS":
      console.log("favoris about to be changed");
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, favoris: !todo.favoris } : todo
      );
    default:
      return state;
  }
};

export default todos;
