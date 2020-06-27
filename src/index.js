import {createATodo} from './createATodo';

let todos = [];

const newTodoBtn = document.querySelector('#new-todo-button');
const inputContainer = document.querySelector('#input-container');

// Show the input box
newTodoBtn.addEventListener('click', () => {
  inputContainer.classList.remove('hide');
  // darken the background
  inputContainer.style.cssText = '-webkit-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3);';
});

// Hide the input box if clicked outside
window.addEventListener('click', () => {
  if (!inputContainer.classList.contains('hide')) {
    if (!inputContainer.contains(event.target) && event.target !== newTodoBtn) {
      toHide();
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

    createATodo(inputTitle, inputDescription, inputDate, inputProject, inputPriority);
    toHide();
    resetInput();
  });

function toHide() {
  inputContainer.classList.add('hide');
  inputContainer.style.cssText = '';
}

function resetInput() {
  inputElements.forEach((element) => {
    element.value = '';
  });
}

export {todos};