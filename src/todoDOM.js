import {deleteATodo, completeATodo} from './todoInteractions';
import {todos, helperFunctions} from './index';

const todoSpace = document.querySelector('#todo-space');
const newTodoBtn = document.querySelector('#new-todo-button');
// const mainSection = document.querySelector('#main-section');

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
      const todoInputElements = document.querySelectorAll('.todo-input-elements');
      completeBtn.firstChild.style.color = '#D00000';
      todoContainer.style.backgroundColor = '#44AF69';
      todoInputElements.forEach((element) => element.style.cssText = 'text-decoration: line-through;');
      isClicked = true;
    } else {
      // If clicked second time - delete the to-do element
      todoSpace.removeChild(todoContainer);
      completeATodo(newTodo);
      isClicked = false;
    }
    helperFunctions().toShow(undoBtn);
  });

  let todoTitle = document.createElement('div');
  todoTitle.classList.add('todo-title', 'todo-input-elements');
  todoTitle.textContent = newTodo.title;
  line1.appendChild(todoTitle);

  let todoDescription = document.createElement('div');
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
  helperFunctions().toHide(undoBtn); // We need it only when the complete button has been clicked
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

  // Edit button functionality
  editBtn.addEventListener('click', () => {

    const editContainer = document.querySelector('#edit-container');
    const editSubmitBtn = document.querySelector('#edit-submit-btn');

    let editTitle = document.querySelector('#edit-title');
    let editDescription = document.querySelector('#edit-description');
    let editDate = document.querySelector('#edit-date');
    let editProjectName = document.querySelector('#edit-project');
    let editPriority = document.querySelector('#edit-priority');
    
    editTitle.value = newTodo.title;
    editDescription.value = newTodo.description;
    editDate.value = newTodo.dueDate;
    editProjectName.value = newTodo.project;
    editPriority.value = newTodo.priority;

    helperFunctions().toShow(editContainer);

    // Changing the values in the to-do according to the changes in the edit box
    editSubmitBtn.addEventListener('click', () => {

      newTodo.title = editTitle.value;
      todoTitle.textContent = newTodo.title;

      newTodo.description = editDescription.value;
      todoDescription.textContent = newTodo.description;

      newTodo.dueDate = editDate.value;
      todoDueTime.textContent = newTodo.dueDate;

      newTodo.priority = editPriority.value;
      todoPriority.textContent = newTodo.priority;

      newTodo.project = editProjectName.value;
      todoProjectName = newTodo.project;

      console.log(newTodo);
      helperFunctions().toHide(editContainer);
    });

    // Hide the container when clicked outside of it
    window.addEventListener('click', () => {
      helperFunctions().hideBox(editContainer, editBtn);
    });

  });

  // Delete button
  const delBtn = document.createElement('div');
  delBtn.classList.add('del-btn');
  delBtn.innerHTML = `<a href="#"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>`;
  todoOptions.appendChild(delBtn);

  // Delete button functionality
  delBtn.addEventListener('click', () => {
    todoSpace.removeChild(todoContainer);
    deleteATodo(newTodo);
  });

  // second row in a to-do element
  const line2 = document.createElement('div');
  line2.setAttribute('id', 'line2');
  todoContainer.appendChild(line2);

  let todoDueTime = document.createElement('div');
  todoDueTime.classList.add('due-time', 'todo-input-elements');
  todoDueTime.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> ${newTodo.dueDate}`;
  line2.appendChild(todoDueTime);

  let todoPriority = document.createElement('div');
  todoPriority.classList.add('todo-priority', 'todo-input-elements');
  todoPriority.textContent = newTodo.priority;
  line2.appendChild(todoPriority);

  let todoProjectName = document.createElement('div');
  todoProjectName.classList.add('todo-project-name', 'todo-input-elements');
  todoProjectName.textContent = newTodo.project;
  line2.appendChild(todoProjectName);
}

export {appendATodo};