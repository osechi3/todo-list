import {todos} from './index'

const todoItem = (title, description, dueDate, priority, project, isComplete) => {
  isComplete = false;
  return {title, description, dueDate, priority, project, isComplete}
}

let test = todoItem('Do the dishes', 'Mom asked me to do the dishes', 'Monday 05/12/2020', 'Priority 1', 'Default');

const createATodo = (title, description, dueDate, priority, project) => {
  let newTodo = todoItem(title, description, dueDate, priority, project);
  todos.push(newTodo);
  console.log(todos);
  appendATodo(newTodo);
}

const todoSpace = document.querySelector('#todo-space');
const newTodoBtn = document.querySelector('#new-todo-button');

// Put a new to-do onto the page
const appendATodo = (newTodo) => {

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-elements');
  todoContainer.setAttribute('data', `order-${todos.indexOf(newTodo)}`);
  todoSpace.insertBefore(todoContainer, newTodoBtn);

  // first row in a to-do element
  const line1 = document.createElement('div');
  line1.setAttribute('id', 'line1');
  todoContainer.appendChild(line1);

  // Complete button
  const completeBtn = document.createElement('div');
  completeBtn.setAttribute('id', 'complete-btn');
  completeBtn.innerHTML = `<a  href="#"><i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i></a>`
  line1.appendChild(completeBtn);
  let isClicked = false;

  // Complete button functionality
  completeBtn.addEventListener('click', () => {
    if (!isClicked) {
      completeBtn.firstChild.style.color = '#D00000';
      todoContainer.style.backgroundColor = '#44AF69';
      const todoInputElements = document.querySelectorAll('.todo-input-elements');
      todoInputElements.forEach((element) => element.style.cssText = 'text-decoration: line-through;');
      isClicked = true;
    } else {
      todoSpace.removeChild(todoContainer);
      console.log(todos.indexOf(newTodo));
      todos.splice(todos.indexOf(newTodo), 1);
      console.log(todos);
      isClicked = false;
    }
    // Showing undo button
    undoBtn.classList.remove('hide');
  });

  const todoTitle = document.createElement('div');
  todoTitle.classList.add('todo-title', 'todo-input-elements');
  todoTitle.textContent = newTodo.title;
  line1.appendChild(todoTitle);

  const todoDescription = document.createElement('div');
  todoDescription.classList.add('todo-description', 'todo-input-elements');
  todoDescription.textContent = newTodo.description;
  line1.appendChild(todoDescription);

  const todoOptions = document.createElement('div');
  todoOptions.setAttribute('id', 'todo-options');
  line1.appendChild(todoOptions);

  // Undo, edit and delete buttons
  // Undo button
  const undoBtn = document.createElement('div');
  undoBtn.setAttribute('id', 'undo-btn');
  undoBtn.classList.add('hide');
  undoBtn.innerHTML = `<a href="#" ><i class="fa fa-undo fa-2x" aria-hidden="true"></i>
  </a>`;
  todoOptions.appendChild(undoBtn);

  // Undo button functionality
  undoBtn.addEventListener('click', () => {
    isClicked = false;
    completeBtn.firstChild.style.color = '';
    todoContainer.style.backgroundColor = '';
    const todoInputElements = document.querySelectorAll('.todo-input-elements');
    todoInputElements.forEach((element) => element.style.cssText = '');
  });

  const editBtn = document.createElement('div');
  editBtn.setAttribute('id', 'edit-btn');
  editBtn.innerHTML = `<a href="#"><i class="fa fa-pencil-square fa-2x" aria-hidden="true"></i></a>`;
  todoOptions.appendChild(editBtn);

  // Delete button
  const delBtn = document.createElement('div');
  delBtn.classList.add('del-btn');
  delBtn.innerHTML = `<a href="#"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>`;
  todoOptions.appendChild(delBtn);

  // Delete button functionality
  delBtn.addEventListener('click', () => {
    todoSpace.removeChild(todoContainer);
    console.log(todos.indexOf(newTodo));
    todos.splice(todos.indexOf(newTodo), 1);
    console.log(todos);
  });

  // second row in a to-do element
  const line2 = document.createElement('div');
  line2.setAttribute('id', 'line2');
  todoContainer.appendChild(line2);

  const todoDueTime = document.createElement('div');
  todoDueTime.classList.add('due-time', 'todo-input-elements');
  todoDueTime.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> ${newTodo.dueDate}`;
  line2.appendChild(todoDueTime);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('todo-priority', 'todo-input-elements');
  todoPriority.textContent = newTodo.priority;
  line2.appendChild(todoPriority);

  const todoProjectName = document.createElement('div');
  todoProjectName.classList.add('todo-project-name', 'todo-input-elements');
  todoProjectName.textContent = newTodo.project;
  line2.appendChild(todoProjectName);
}

export {createATodo};