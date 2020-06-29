import {todos, completedTodos} from './index';

const completeATodo = (newTodo) => {
  completedTodos.push(newTodo);
  deleteATodo(newTodo);
  console.log(todos);
  console.log(completedTodos);
}

const deleteATodo = (newTodo) => {
  console.log(todos.indexOf(newTodo));
  todos.splice(todos.indexOf(newTodo), 1);
  console.log(todos);
}

export {deleteATodo, completeATodo};