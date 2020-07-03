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

  // Adding a new project to the project section

  const newProjectItem = document.createElement('li');
  newProjectItem.setAttribute('id', newProject.name.toLowerCase());
  projectList.insertBefore(newProjectItem, projectCreationBtn);

  const newProjectItemBtn = document.createElement('a');
  newProjectItemBtn.setAttribute('href', '#');
  newProjectItemBtn.textContent = newProject.name;
  newProjectItem.appendChild(newProjectItemBtn);

  // A new project item functionality

  // When clicked hide the to-dos that are not in the project
  newProjectItemBtn.addEventListener('click', () => {
    const todoProjectNames = document.querySelectorAll('.todo-project-name');
    todoProjectNames.forEach((name) => {
      console.log(name.dataset.order);
      if (name.textContent !== newProjectItemBtn.textContent) {
        
        // Hiding the to-do containers that aren't in the project
        helperFunctions().toHide(name.parentElement.parentElement);
        
        // Removing them from the flow of the page
        name.parentElement.parentElement.style.cssText = 'position: absolute';
      }
    });
  });

  // Home button functionality

  // Show all todos regardless of a project
  const homeBtn = document.querySelector('#default-project');
  homeBtn.addEventListener('click', () => {
    const todoProjectNames = document.querySelectorAll('.todo-project-name');
    todoProjectNames.forEach((name) => {

      // Removing hide class from all to-dos
      helperFunctions().toShow(name.parentElement.parentElement);

      // Removing absolute positioning from the hidden to-dos
      name.parentElement.parentElement.style.cssText = '';
    });
  });
  

  // Adding a new project to the input container and to the edit container 
  // where a user can choose a project to put a new to-do into

  const inputProjectSelector = document.querySelector('#input-project');
  const newProjectInputOption = document.createElement('option');
  newProjectInputOption.setAttribute('value', `${newProject.name}`);
  newProjectInputOption.textContent = newProject.name;
  inputProjectSelector.appendChild(newProjectInputOption);

  
  const editProjectSelector = document.querySelector('#edit-project');
  const newProjectEditOption = document.createElement('option');
  newProjectEditOption.setAttribute('value', `${newProject.name}`);
  newProjectEditOption.textContent = newProject.name;
  editProjectSelector.appendChild(newProjectEditOption);

}

export {appendProject, createAProjectDOM};