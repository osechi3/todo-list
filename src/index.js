import { createATodo } from './todoInteractions';
import { createAProjectDOM, showInputProjects } from './projectDOM';
import { projects } from './localStorageInteractions';
import moment from 'moment';
import { getFromStorage, createFromStorageTodo, createFromStorageProject } from './localStorageInteractions';


const newTodoBtn = document.querySelector('#new-todo-btn');
const inputContainer = document.querySelector('#input-container');

// Show the input box
newTodoBtn.addEventListener('click', () => {
  helperFunctions().toShow(inputContainer);
  
  // darken the background
  inputContainer.style.cssText = '-webkit-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3);';

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
  helperFunctions().resetInputAll(inputElements); // clear input boxes when you get user's input
});


// Hide the container
const closeInputBtn = document.querySelector('#close-input-btn');
closeInputBtn.addEventListener('click', () => {
  helperFunctions().toHide(inputContainer);
});


const helperFunctions = () => {
    
  const toHide = (element) => element.classList.add('hide');

  const toShow = (element) => element.classList.remove('hide');

  const resetInput = (element) => {
    element.value = '';
  }

  const resetInputAll = (elements) => { 
    elements.forEach((element) =>  {

      // Making the default project the default option
      if (element.getAttribute('id') == 'input-project') {
        element.value = 'Default';
      } else {
        element.value = ''
      }
    });
  };

  const formatDate = (newTodo) => {

    // formats date from YYYY-MM-DD to DD-MMM or DD-MMM-YYY
    // If input year is a current year omit it (DD-MMM)
    const currentYear = moment().year();
    let newToDoYear = moment(newTodo).year();
    if (newTodo == '') {
      return newTodo;
    } else if (currentYear == newToDoYear) {
      return moment(newTodo).format('DD MMM');
    } else {
      return moment(newTodo).format('DD MMM YYYY');
    }
  
  }

  return {toHide, toShow, resetInput, resetInputAll, formatDate}
}


// Create a webpage and get everything from localStorage
createAProjectDOM();
getFromStorage();
showInputProjects(projects);
createFromStorageTodo();
createFromStorageProject();


export { helperFunctions};