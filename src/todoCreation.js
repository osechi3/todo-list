import {appendATodo} from './todoDOM';
import {addToProject} from './projectCreation';
import { addToStorage, todos } from './localStorageInteractions';

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

export {createATodo};