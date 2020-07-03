import {appendProject} from './projectDOM';
import {projects} from './index';

const todoProject = (name, todos) => {
  todos = [];
  return {name, todos}
}

const createAProject = (name, todos) => {
  let newProject = todoProject(name, todos);
  projects.push(newProject);
  console.log(projects);
  appendProject(newProject);
}

const addToProject = (newTodo) => {
  const inputProject = document.querySelector('#input-project').value;
  console.log(inputProject)
  projects.map((project) => {
    if (project.name == inputProject) {
      project.todos.push(newTodo);
      console.log(projects);
    }
  });
}


export {createAProject, addToProject};