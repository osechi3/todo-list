import {createATodo} from './todoCreation';

// Storage for to-dos
let todos = [];
let completedTodos = [];

const newTodoBtn = document.querySelector('#new-todo-button');
const inputContainer = document.querySelector('#input-container');

// Show the input box
newTodoBtn.addEventListener('click', () => {
  helperFunctions().toShow(inputContainer);
  // darken the background
  inputContainer.style.cssText = '-webkit-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3);';
});

// Hide the input box if clicked outside
window.addEventListener('click', () => {
  if (!inputContainer.classList.contains('hide')) {
    if (!inputContainer.contains(event.target) && event.target !== newTodoBtn) {
      helperFunctions().toHide(inputContainer);
    }
  }
});

// Submit user's input
const inputElements = document.querySelectorAll('.input-elements');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
  const inputTitle = document.querySelector('#input-title').value;
  const inputDescription = document.querySelector('#input-description').value;
  const inputDate = document.querySelector('#input-date').value;
  const inputProject = document.querySelector('#input-project').value;
  const inputPriority = document.querySelector('#input-priority').value;

  createATodo(inputTitle, inputDescription, inputDate, inputPriority, inputProject);
  helperFunctions().toHide(inputContainer);
  helperFunctions().resetInput(inputElements); // clear input boxes when you get user's input
});

const helperFunctions = () => {
    
  function toHide(element) {
    element.classList.add('hide');
  }
  function toShow(element) {
    element.classList.remove('hide');
  }
  function resetInput(elements) {
    elements.forEach((element) => {
      element.value = '';
    });
  }
  return {toHide, toShow, resetInput}
}

export {todos, completedTodos, helperFunctions};