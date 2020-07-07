import {appendProject} from './projectDOM';
import { addToStorage, projects, todos } from './localStorageInteractions';

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

// Delete from projects array
const deleteProject = (newProject) => {

  projects.map((project) => {
    // Default project is always there
    if (project.name !== 'Default' && project.name == newProject.name) {

      projects.splice(projects.indexOf(project), 1);
    }
  });
}

export {createAProject, addToProject, deleteProject};