import { createATodo } from './todoInteractions';
import { createAProject } from './projectInteractions';


// Storage for to-dos and projects
let todos = [];
let completedTodos = [];
let projects = [{name: 'Default', todos: []}];


const addToStorage = () => {
  console.log(projects);
  let todosString = JSON.stringify(todos);
  let completedTodosString = JSON.stringify(completedTodos);
  let projectsString = JSON.stringify(projects);

  localStorage.setItem('todos', todosString);
  localStorage.setItem('completedTodos', completedTodosString);
  localStorage.setItem('projects', projectsString);

  console.log(localStorage);
}


const getFromStorage = () => {
  if (localStorage.todos !== undefined) {

    let todosStorage = localStorage.getItem('todos');
    todos = JSON.parse(todosStorage);

    // Fixing the order of the todos otherwise it changes because of 
    // deleting elements after using them to create a todo when loading the page
    todos.reverse();
    console.log(todos);

  }
  if (localStorage.completedTodos !== undefined) {

    let completedTodosStorage = localStorage.getItem('completedTodos');
    completedTodos = JSON.parse(completedTodosStorage);
    console.log(completedTodos);

  }
  if (localStorage.projects !== undefined) {
    let projectsStorage = localStorage.getItem('projects');
    projects = JSON.parse(projectsStorage);

    // Fixing the order of the projects on the page
    projects.reverse();
    console.log(projects);

  }

}


const createFromStorageTodo = () => {
  console.log(todos);
  todos.map((todo) => {

    // Deleting a duplicate todo in the project to create a new one in its place with HTML code
    // since HTML is not saved in the localStorage
    projects.map((project) => {
      if (todo.project == project.name) {
        project.todos.map((projectTodo) => {
          if (todo.title == projectTodo.title) {
            project.todos.splice(project.todos.indexOf(projectTodo), 1);
          }
        });
      }
    });
    console.log(projects);
    
    console.log(todos);
    createATodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.project);
  
    console.log(todos);
  
   // Deleting the todo in todos array used in the createATodo function when loading the page
    todos.splice(todos.indexOf(todo), 1);
    addToStorage();
    console.log(todos);
    console.log(projects);
  });
}


const createFromStorageProject = () => {

  projects.map((project) => {
    if (project.name !== 'Default') { // Default project is always there
      createAProject(project.name, project.todos);
      projects.splice(projects.indexOf(project), 1);
  
      const inputProject = document.querySelector('#input-project');
      const inputProjectOptions = document.querySelectorAll('.input-project-options');
  
        inputProjectOptions.forEach((option) => {
            if (option.value == project.name) inputProject.removeChild(option);
        });
  
      addToStorage();
    } 
  });
}

export { 
  addToStorage, getFromStorage, createFromStorageTodo, 
  createFromStorageProject, todos, projects, completedTodos 
      };