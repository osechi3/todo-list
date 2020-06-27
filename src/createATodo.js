
const todoItem = (title, description, dueDate, priority, project, isComplete) => {
  isComplete = false;
  return {title, description, dueDate, priority, project, isComplete}
}

let test = todoItem('Do the dishes', 'Mom asked me to do the dishes', 'Monday 05/12/2020', 'Priority 1', 'Default');

export {test};