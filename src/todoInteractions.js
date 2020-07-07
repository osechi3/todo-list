import { appendATodo } from './todoDOM';
import { addToProject } from './projectInteractions';
import { addToStorage, todos, completedTodos, projects } from './localStorageInteractions';
import { deleteFromAProject } from './projectDOM';


const todoItem = (title, description, dueDate, priority, project, isComplete) => {
  isComplete = false;
  return {title, description, dueDate, priority, project, isComplete}
}

const createATodo = (title, description, dueDate, priority, project) => {
  let newTodo = todoItem(title, description, dueDate, priority, project);

// instead of push to fix the order of the todo elements 
// when getting them from localStorage
  todos.unshift(newTodo);
  console.log(todos);
  appendATodo(newTodo);
  addToProject(newTodo);
  addToStorage();
}

const completeATodo = (newTodo) => {
  completedTodos.push(newTodo);
  addToStorage();
  deleteATodo(newTodo);
  console.log(todos);
  console.log(completedTodos);
  console.log(projects);
}

const deleteATodo = (newTodo) => {
  console.log(todos.indexOf(newTodo));
  todos.splice(todos.indexOf(newTodo), 1);
  console.log(todos);
  deleteFromAProject(newTodo);
  addToStorage();
  console.log(projects);
}

export {createATodo, completeATodo, deleteATodo};