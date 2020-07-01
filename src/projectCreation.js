import {appendProject} from './projectDOM';

let projects = [{name: 'Default', todos: []}];

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


export {createAProject};