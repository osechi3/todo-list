import { addToStorage, todos, completedTodos, projects } from './localStorageInteractions';
import {deleteFromAProject} from './projectDOM';

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


export {deleteATodo, completeATodo};