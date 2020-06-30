

let projects = [];

const todoProject = (name, todos) => {
  todos = [];
  return {name, todos}
}

const createAProject = (name, todos) => {
  let newProject = todoProject(name, todos);
  projects.push(newProject);
  console.log(projects);
}

createAProject('Default');

export {createAProject};