import {helperFunctions} from './index';

const projectCreationContainer = document.querySelector('#project-creation-container');
const projectCreationBtn = document.querySelector('#project-creation-btn');
projectCreationBtn.addEventListener('click', () => {
  helperFunctions().toShow(projectCreationContainer);
});