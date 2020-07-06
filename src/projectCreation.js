import {appendProject} from './projectDOM';
import { addToStorage, projects } from './localStorageInteractions';

const todoProject = (name, todos = []) => {

  return {name, todos}
}

const createAProject = (name, todos) => {
  let newProject = todoProject(name, todos);

  // Putting a new project at the start of the array so that
  // an array method that gets projects from localStorage don't fire on them
  projects.unshift(newProject);
  addToStorage();
  console.log(projects);
  appendProject(newProject);
}

const addToProject = (newTodo) => {

  projects.map((project) => {
    if (project.name == newTodo.project) {
      project.todos.push(newTodo);
      console.log(projects);
    }
  });
}


export {createAProject, addToProject};