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

  // Adding to the project section

  const newProjectItem = document.createElement('li');
  newProjectItem.textContent = newProject.name;
  projectList.insertBefore(newProjectItem, projectCreationBtn);

  // Adding to the input container where a user can choose a project to put a new to-do into

  const inputProjectSelector = document.querySelector('#input-project');
  const newProjectOption = document.createElement('option');
  newProjectOption.setAttribute('value', `${newProject.name}`);
  newProjectOption.textContent = newProject.name;
  inputProjectSelector.appendChild(newProjectOption);

}

export {appendProject, createAProjectDOM};