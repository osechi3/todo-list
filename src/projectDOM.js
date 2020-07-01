import {helperFunctions} from './index';
import {createAProject} from './projectCreation';

const projectCreationContainer = document.querySelector('#project-creation-container');
const projectCreationBtn = document.querySelector('#project-creation-btn');
const projectList = document.querySelector('#projects');

const createAProjectDOM = () => {

  //Project creation button

  let isClicked = false;
  projectCreationBtn.addEventListener('click', () => {
    if (isClicked == false) {
      helperFunctions().toShow(projectCreationContainer);
      isClicked = true;
    } else {
      helperFunctions().toHide(projectCreationContainer);
      isClicked = false;
    }
  });

  // Project submit button

  const newProjectSubmitBtn = document.querySelector('#new-project-submit-btn');
  const newProjectInputName = document.querySelector('#new-project-name');
  newProjectSubmitBtn.addEventListener('click', () => {
    createAProject(newProjectInputName.value);
    helperFunctions().resetInput(newProjectInputName);
    helperFunctions().toHide(projectCreationContainer);
    isClicked = false;
  });
}

const appendProject = (newProject) => {
  const newProjectItem = document.createElement('li');
  newProjectItem.textContent = newProject.name;
  projectList.insertBefore(newProjectItem, projectCreationBtn);
}

export {appendProject, createAProjectDOM};