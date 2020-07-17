/**
 * Todolist
 */
var app = {
  todosList: [],

  init: function () {
    app.todo = document.getElementById("todo");
    // Je vide le contenu de mon app
    // pour qu'il n'y ai toujours qu'un seul form, compteur et une liste
    app.todo.innerHTML = "";
    // Créer le formulaire
    app.createForm();
    // Créer le compteur
    app.createCount();
    // Créer la liste de todos
    app.createList();
  },
  createForm: () => {
    // Je crée le form
    const form = document.createElement("form");
    form.id = "todo-form";

    // Je crée un input
    const input = document.createElement("input");
    input.type = "text";
    input.id = "todo-input";
    input.placeholder = "Ajouter une tâche";
    // Je le rend disponible en dehors
    app.input = input;
    // J'écoute le submit sur le form
    form.addEventListener("submit", app.handleSubmit);

    form.appendChild(input);
    app.todo.appendChild(form);
  },

  handleSubmit: (evt) => {
    evt.preventDefault();
    app.todosList.push({
      id: uuidv4(),
      text: app.input.value,
      checked: false,
    });
    app.input.value = "";
    app.init();
  },

  createCount: () => {
    const counter = document.createElement("div");
    counter.id = "todo-counter";
    app.counter = counter;
    app.updateCounter();
    app.todo.appendChild(counter);
  },

  updateCounter: () => {
    const todosNotDone = app.todosList.filter((todo) => !todo.checked);
    app.counter.textContent = `${todosNotDone.length} tâches en cours`;
  },

  createList: () => {
    const list = document.createElement("ul");
    list.id = "todo-list";
    app.list = list;
    app.todo.appendChild(list);
    app.todosList.forEach((todo) => {
      app.addTodoInDOM(todo);
    });
  },

  handleCheck: (evt) => {
    // Je veux modifier mon tableau de todos
    // pour que l'objet de ma todo change sa valeur de "checked"
    // modifier le check de la bonne todo... ?
    const todo = evt.target.closest("li");
    const id = todo.id;

    // Je pars de ma liste de todos
    app.todosList = app.todosList.map((todoObject) => {
      // Si l'id de la todo actuelle est celui que je doit modifier
      // Return un objet modifié
      if (todoObject.id === id) {
        return {
          id: todoObject.id,
          text: todoObject.text,
          checked: !todoObject.checked,
        };
      }

      // Sinon je return la todo non modifiée
      return todoObject;
    });

    app.init();
  },

  addTodoInDOM: (todoObject) => {
    const todo = document.createElement("li");
    todo.className = todoObject.checked ? "todo todo--done" : "todo";
    todo.id = todoObject.id;
    // J'ai besoin d'une checkbox
    const check = document.createElement("input");
    check.checked = todoObject.checked;
    check.type = "checkbox";
    check.addEventListener("change", app.handleCheck);
    // D'un texte de todo
    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todoObject.text;
    // Je mets la checkbox et le texte dans la todo
    todo.appendChild(check);
    todo.appendChild(text);
    // Et la todo dans la liste
    app.list.appendChild(todo);
  },
};

// Chargement du DOM
document.addEventListener("DOMContentLoaded", app.init);
