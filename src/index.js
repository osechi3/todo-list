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

  // Hide the input box if clicked outside
  window.addEventListener('click', () => {
    helperFunctions().hideBox(inputContainer, newTodoBtn);
  });
});

// Submit user's input
const inputElements = document.querySelectorAll('.input-elements');
const submitBtn = document.querySelector('#input-submit-btn');

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
    
  const toHide = (element) => { element.classList.add('hide');}
  
  // Hide the box if clicked outside
  const hideBox = (box, eventHandler) => {
    if (!box.classList.contains('hide')) {
      console.log(event.target);
      if (!box.contains(event.target) && !eventHandler.contains(event.target)) {
        helperFunctions().toHide(box);
      }
    }
  }
  const toShow = (element) => {element.classList.remove('hide');}

  const resetInput = (elements) => { 
    elements.forEach((element) => element.value = '')
  };
  
  return {toHide, hideBox, toShow, resetInput}
}

export {todos, completedTodos, helperFunctions};