import { appendATodo } from './todoDOM';
import { addToProject } from './projectInteractions';
import { addToStorage, todos, completedTodos, projects } from './localStorageInteractions';
import { deleteFromProject } from './projectDOM';


const todoItem = (title, description, dueDate, priority, project) => {

  return {title, description, dueDate, priority, project}
}

const createTodo = (title, description, dueDate, priority, project) => {
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
  deleteTodo(newTodo);
  console.log(todos);
  console.log(completedTodos);
  console.log(projects);
}

const deleteTodo = (newTodo) => {
  console.log(todos.indexOf(newTodo));
  todos.splice(todos.indexOf(newTodo), 1);
  console.log(todos);
  deleteFromProject(newTodo);
  addToStorage();
  console.log(projects);
}

export {createTodo, completeATodo, deleteTodo};