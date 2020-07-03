import {todos} from './index';
import {appendATodo} from './todoDOM';
import {addToProject} from './projectCreation';

const todoItem = (title, description, dueDate, priority, project, isComplete) => {
  isComplete = false;
  return {title, description, dueDate, priority, project, isComplete}
}

const createATodo = (title, description, dueDate, priority, project) => {
  let newTodo = todoItem(title, description, dueDate, priority, project);
  todos.push(newTodo);
  console.log(todos);
  appendATodo(newTodo);
  addToProject(newTodo);
}

export {createATodo};