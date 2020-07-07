import { deleteATodo, completeATodo } from './todoInteractions';
import { helperFunctions } from './index';
import { addPriorityColor } from './priorityInteractions';
import { addToStorage } from './localStorageInteractions';

const todoSpace = document.querySelector('#todo-space');
const newTodoBtn = document.querySelector('#new-todo-btn');
// const mainSection = document.querySelector('#main-section');

// Put a new to-do onto the page
const appendATodo = (newTodo) => {

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-elements');
  todoSpace.insertBefore(todoContainer, newTodoBtn);

  // first row in a to-do element
  const line1 = document.createElement('div');
  line1.setAttribute('id', 'line1');
  todoContainer.appendChild(line1);

  // Complete button
  const completeBtn = document.createElement('div');
  completeBtn.setAttribute('id', 'complete-btn');
  completeBtn.innerHTML = `<a  href="#"><i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i></a>`
  line1.appendChild(completeBtn);
  let isClicked = false;

  // Complete button functionality
  completeBtn.addEventListener('click', () => {
    if (!isClicked) {
      const todoInputElements = document.querySelectorAll('.todo-input-elements');
      completeBtn.firstChild.style.color = '#D00000';
      todoContainer.style.backgroundColor = 'white';
      todoInputElements.forEach((element) => element.style.cssText = 'text-decoration: line-through;');
      isClicked = true;
    } else {
      // If clicked second time - delete the to-do element
      todoSpace.removeChild(todoContainer);
      completeATodo(newTodo);
      isClicked = false;
    }
    helperFunctions().toShow(undoBtn);
  });

  let todoTitle = document.createElement('div');
  todoTitle.classList.add('todo-title', 'todo-input-elements');
  todoTitle.textContent = newTodo.title;
  line1.appendChild(todoTitle);

  let todoDescription = document.createElement('div');
  todoDescription.classList.add('todo-description', 'todo-input-elements');
  todoDescription.textContent = newTodo.description;
  line1.appendChild(todoDescription);

  const todoOptions = document.createElement('div');
  todoOptions.setAttribute('id', 'todo-options');
  line1.appendChild(todoOptions);

  // Undo, edit and delete buttons

  // Undo button
  const undoBtn = document.createElement('div');
  undoBtn.setAttribute('id', 'undo-btn');
  helperFunctions().toHide(undoBtn); // We need it only when the complete button has been clicked
  undoBtn.innerHTML = `<a href="#" ><i class="fa fa-undo fa-2x" aria-hidden="true"></i>
  </a>`;
  todoOptions.appendChild(undoBtn);

  // Undo button functionality
  undoBtn.addEventListener('click', () => {
    isClicked = false;
    completeBtn.firstChild.style.color = '';
    todoContainer.style.backgroundColor = '';
    const todoInputElements = document.querySelectorAll('.todo-input-elements');
    todoInputElements.forEach((element) => element.style.cssText = '');
    helperFunctions().toHide(undoBtn);
  });

  // Edit button
  const editBtn = document.createElement('div');
  editBtn.setAttribute('id', 'edit-btn');
  editBtn.innerHTML = `<a href="#"><i class="fa fa-pencil-square fa-2x" aria-hidden="true"></i></a>`;
  todoOptions.appendChild(editBtn);

  // Edit button functionality is on the bottom of the file
  
  // Delete button
  const delBtn = document.createElement('div');
  delBtn.classList.add('del-btn');
  delBtn.innerHTML = `<a href="#"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>`;
  todoOptions.appendChild(delBtn);

  // Delete button functionality
  delBtn.addEventListener('click', () => {
    todoSpace.removeChild(todoContainer);
    deleteATodo(newTodo);
    addToStorage();
  });

  // second row in a to-do element
  const line2 = document.createElement('div');
  line2.setAttribute('id', 'line2');
  todoContainer.appendChild(line2);

  let todoDueTime = document.createElement('div');
  todoDueTime.classList.add('due-time', 'todo-input-elements');

  let todoDueTimeFormat = helperFunctions().formatDate(newTodo.dueDate);
  todoDueTime.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> ${todoDueTimeFormat}`;
  line2.appendChild(todoDueTime);

  let todoPriority = document.createElement('div');
  todoPriority.classList.add('todo-priority', 'todo-input-elements');
  todoPriority.innerHTML = `<i class="fa fa-circle" aria-hidden="true"></i> ${newTodo.priority}`;
  todoPriority.style.color = addPriorityColor(newTodo);
  line2.appendChild(todoPriority);

  let todoProjectName = document.createElement('div');
  todoProjectName.classList.add('todo-project-name', 'todo-input-elements');
  todoProjectName.textContent = newTodo.project;
  line2.appendChild(todoProjectName);


  // Edit button functionality
  editBtn.addEventListener('click', () => {

    // Showing edit container

    const editContainer = document.createElement('div');
    editContainer.setAttribute('id', 'edit-container');
    todoSpace.appendChild(editContainer);


    // The first row of the elements in the container
    const editLine1 = document.createElement('div');
    editLine1.setAttribute('id', 'edit-line1');
    editContainer.appendChild(editLine1);

    // Title
    const editTitleLabel = document.createElement('label');
    editTitleLabel.setAttribute('for', 'edit-title');
    editLine1.appendChild(editTitleLabel);

    const editTitle = document.createElement('input');
    editTitle.setAttribute('id', 'edit-title');
    editTitle.setAttribute('type', 'text');
    editTitle.setAttribute('name', 'edit-title');
    editTitle.setAttribute('maxlength', '45');
    editTitle.setAttribute('placeholder', 'Title');
    editLine1.appendChild(editTitle);

    // Description
    const editDescriptionLabel = document.createElement('label');
    editDescriptionLabel.setAttribute('for', 'edit-description');
    editLine1.appendChild(editTitleLabel);

    const editDescription = document.createElement('input');
    editDescription.setAttribute('id', 'edit-description');
    editDescription.setAttribute('type', 'text');
    editDescription.setAttribute('name', 'edit-description');
    editDescription.setAttribute('maxlength', '150');
    editDescription.setAttribute('placeholder', 'Description');
    editLine1.appendChild(editDescription);

    // Due date
    const editDateLabel = document.createElement('label');
    editDateLabel.setAttribute('for', 'edit-date');
    editLine1.appendChild(editDateLabel);

    const editDate = document.createElement('input');
    editDate.setAttribute('id', 'edit-date');
    editDate.setAttribute('name', 'edit-date');
    editDate.setAttribute('type', 'date');
    editLine1.appendChild(editDate);

    // Close button
    const closeEditBtn = document.createElement('div');
    closeEditBtn.setAttribute('id', 'close-edit-btn');
    closeEditBtn.classList.add('close-btn');
    closeEditBtn.innerHTML = `<a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>`;
    editLine1.appendChild(closeEditBtn);

    // Close button functionality (Hides the edit container)
    closeEditBtn.addEventListener('click', () => {
      helperFunctions().toHide(editContainer);
    });


    // The second row of the elements in the container
    const editLine2 = document.createElement('div');
    editLine2.setAttribute('id', 'edit-line2');
    editContainer.appendChild(editLine2);

    // Submit button
    const editSubmitBtn = document.createElement('button');
    editSubmitBtn.setAttribute('id', 'edit-submit-btn');
    editSubmitBtn.setAttribute('type', 'button');
    editSubmitBtn.classList.add('submit-btn');
    editSubmitBtn.textContent = 'Confirm';
    editLine2.appendChild(editSubmitBtn);

    // Priority
    const editPriorityLabel = document.createElement('label');
    editPriorityLabel.setAttribute('for', 'edit-priority');
    editLine2.appendChild(editPriorityLabel);

    const editPriority = document.createElement('select');
    editPriority.setAttribute('id', 'edit-priority');
    editPriority.classList.add('edit-options');
    editPriority.setAttribute('name', 'edit-priority');
    editLine2.appendChild(editPriority);

    // Priority options
    const defaultPriority = document.createElement('option');
    defaultPriority.setAttribute('value', '');
    defaultPriority.textContent = 'Priority';
    editPriority.appendChild(defaultPriority);

    const Priority1 = document.createElement('option');
    Priority1.setAttribute('value', 'Low');
    Priority1.textContent = 'Low';
    editPriority.appendChild(Priority1);

    const Priority2 = document.createElement('option');
    Priority2.setAttribute('value', 'Medium');
    Priority2.textContent = 'Medium';
    editPriority.appendChild(Priority2);

    const Priority3 = document.createElement('option');
    Priority3.setAttribute('value', 'High');
    Priority3.textContent = 'High';
    editPriority.appendChild(Priority3);


    // Showing values of a to-do in the object in the edit box
    editTitle.value = newTodo.title;
    editDescription.value = newTodo.description;
    editDate.value = newTodo.dueDate;
    editPriority.value = newTodo.priority;


    // Applying the changes in the edit box to the to-do item on the page 
    // and to the one in the array

    editSubmitBtn.addEventListener('click', () => {

      console.log(newTodo);
      helperFunctions().toHide(editContainer)
      todoTitle.textContent = editTitle.value;
      newTodo.title = editTitle.value;

      todoDescription.textContent = editDescription.value;
      newTodo.description = editDescription.value;

      let todoDueTimeFormat = helperFunctions().formatDate(editDate.value);
      todoDueTime.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> ${todoDueTimeFormat}`;
      newTodo.dueDate = editDate.value;

      todoPriority.innerHTML = `<i class="fa fa-circle" aria-hidden="true"></i> ${editPriority.value}`;
      newTodo.priority = editPriority.value;
      todoPriority.style.color = addPriorityColor(newTodo);
      console.log(newTodo);
      addToStorage();

    });

  });
}

export {appendATodo};