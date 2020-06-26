

const newTodoButton = document.querySelector('#new-todo-button');
const inputContainer = document.querySelector('#input-container');

// Show the input box
newTodoButton.addEventListener('click', () => {
  inputContainer.classList.remove('hide');
  // darken the background
  inputContainer.style.cssText = '-webkit-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3);';
});

// Hide the input box if clicked outside
window.addEventListener('click', () => {
  if (!inputContainer.classList.contains('hide')) {
    if (!inputContainer.contains(event.target) && event.target !== newTodoButton) {
      inputContainer.classList.add('hide');
      inputContainer.style.cssText = '';
    }
  }
});