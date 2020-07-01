/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todos, completedTodos, helperFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todos\", function() { return todos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completedTodos\", function() { return completedTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helperFunctions\", function() { return helperFunctions; });\n/* harmony import */ var _todoCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreation */ \"./src/todoCreation.js\");\n/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDOM */ \"./src/projectDOM.js\");\n\n\n\n// Storage for to-dos\nlet todos = [];\nlet completedTodos = [];\n\nconst newTodoBtn = document.querySelector('#new-todo-btn');\nconst inputContainer = document.querySelector('#input-container');\n\n// Show the input box\nnewTodoBtn.addEventListener('click', () => {\n  helperFunctions().toShow(inputContainer);\n  \n  // darken the background\n  inputContainer.style.cssText = '-webkit-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3);';\n\n  // Hide the input box if clicked outside\n  window.addEventListener('click', () => {\n    helperFunctions().hideBox(inputContainer, newTodoBtn);\n  });\n});\n\n// Submit user's input\nconst inputElements = document.querySelectorAll('.input-elements');\nconst submitBtn = document.querySelector('#input-submit-btn');\n\nsubmitBtn.addEventListener('click', () => {\n  const inputTitle = document.querySelector('#input-title').value;\n  const inputDescription = document.querySelector('#input-description').value;\n  const inputDate = document.querySelector('#input-date').value;\n  const inputProject = document.querySelector('#input-project').value;\n  const inputPriority = document.querySelector('#input-priority').value;\n\n  Object(_todoCreation__WEBPACK_IMPORTED_MODULE_0__[\"createATodo\"])(inputTitle, inputDescription, inputDate, inputPriority, inputProject);\n  helperFunctions().toHide(inputContainer);\n  helperFunctions().resetInputAll(inputElements); // clear input boxes when you get user's input\n});\n\nconst helperFunctions = () => {\n    \n  const toHide = (element) => { element.classList.add('hide');}\n\n  // Hide the box if clicked outside\n  const hideBox = (box, eventHandler) => {\n    if (!box.classList.contains('hide')) {\n      console.log(event.target);\n      if (!box.contains(event.target) && !eventHandler.contains(event.target)) {\n        helperFunctions().toHide(box);\n      }\n    }\n  }\n  const toShow = (element) => {element.classList.remove('hide');}\n\n  const resetInput = (element) => {\n    element.value = '';\n  }\n\n  const resetInputAll = (elements) => { \n    elements.forEach((element) => element.value = '')\n  };\n\n  return {toHide, hideBox, toShow, resetInput, resetInputAll}\n}\nObject(_projectDOM__WEBPACK_IMPORTED_MODULE_1__[\"createAProjectDOM\"])();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projectCreation.js":
/*!********************************!*\
  !*** ./src/projectCreation.js ***!
  \********************************/
/*! exports provided: createAProject, projects, appendToProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAProject\", function() { return createAProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendToProject\", function() { return appendToProject; });\n/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDOM */ \"./src/projectDOM.js\");\n\n\nlet projects = [{name: 'Default', todos: []}];\n\nconst todoProject = (name, todos) => {\n  todos = [];\n  return {name, todos}\n}\n\nconst createAProject = (name, todos) => {\n  let newProject = todoProject(name, todos);\n  projects.push(newProject);\n  console.log(projects);\n  Object(_projectDOM__WEBPACK_IMPORTED_MODULE_0__[\"appendProject\"])(newProject);\n}\n\nconst appendToProject = (newTodo) => {\n  const inputProject = document.querySelector('#input-project').value;\n  console.log(inputProject)\n  projects.map((project) => {\n    if (project.name == inputProject) {\n      project.todos.push(newTodo);\n      console.log(projects);\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/projectCreation.js?");

/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/*! exports provided: appendProject, createAProjectDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendProject\", function() { return appendProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAProjectDOM\", function() { return createAProjectDOM; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _projectCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreation */ \"./src/projectCreation.js\");\n\n\n\nconst projectCreationContainer = document.querySelector('#project-creation-container');\nconst projectCreationBtn = document.querySelector('#project-creation-btn');\nconst projectList = document.querySelector('#projects');\n\nconst createAProjectDOM = () => {\n\n  //Project creation button\n\n  let isClicked = false;\n  projectCreationBtn.addEventListener('click', () => {\n    if (isClicked == false) {\n      Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"helperFunctions\"])().toShow(projectCreationContainer);\n      isClicked = true;\n    } else {\n      Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"helperFunctions\"])().toHide(projectCreationContainer);\n      isClicked = false;\n    }\n  });\n\n  // Project submit button\n\n  const newProjectSubmitBtn = document.querySelector('#new-project-submit-btn');\n  const newProjectInputName = document.querySelector('#new-project-name');\n  newProjectSubmitBtn.addEventListener('click', () => {\n    Object(_projectCreation__WEBPACK_IMPORTED_MODULE_1__[\"createAProject\"])(newProjectInputName.value);\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"helperFunctions\"])().resetInput(newProjectInputName);\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"helperFunctions\"])().toHide(projectCreationContainer);\n    isClicked = false;\n  });\n}\n\nconst appendProject = (newProject) => {\n\n  // Adding a new project to the project section\n\n  const newProjectItem = document.createElement('li');\n  newProjectItem.setAttribute('id', newProject.name.toLowerCase());\n  projectList.insertBefore(newProjectItem, projectCreationBtn);\n\n  const newProjectItemBtn = document.createElement('a');\n  newProjectItemBtn.setAttribute('href', '#');\n  newProjectItemBtn.textContent = newProject.name;\n  newProjectItem.appendChild(newProjectItemBtn);\n\n  // A new project item functionality\n\n  // When clicked hide the to-dos that are not in the project\n  newProjectItemBtn.addEventListener('click', () => {\n    const todoProjectNames = document.querySelectorAll('.todo-project-name');\n    todoProjectNames.forEach((name) => {\n      console.log(name.dataset.order);\n      if (name.textContent !== newProjectItemBtn.textContent) {\n        \n        // Hiding the to-do containers that aren't in the project\n        Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"helperFunctions\"])().toHide(name.parentElement.parentElement);\n        \n        // Removing them from the flow of the page\n        name.parentElement.parentElement.style.cssText = 'position: absolute';\n      }\n    });\n  });\n  \n  // Adding a new project to the input container where a user can choose a project to put a new to-do into\n\n  const inputProjectSelector = document.querySelector('#input-project');\n  const newProjectOption = document.createElement('option');\n  newProjectOption.setAttribute('value', `${newProject.name}`);\n  newProjectOption.textContent = newProject.name;\n  inputProjectSelector.appendChild(newProjectOption);\n\n}\n\n\n\n//# sourceURL=webpack:///./src/projectDOM.js?");

/***/ }),

/***/ "./src/todoCreation.js":
/*!*****************************!*\
  !*** ./src/todoCreation.js ***!
  \*****************************/
/*! exports provided: createATodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createATodo\", function() { return createATodo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _todoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDOM */ \"./src/todoDOM.js\");\n/* harmony import */ var _projectCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCreation */ \"./src/projectCreation.js\");\n\n\n\n\nconst todoItem = (title, description, dueDate, priority, project, isComplete) => {\n  isComplete = false;\n  return {title, description, dueDate, priority, project, isComplete}\n}\n\nconst createATodo = (title, description, dueDate, priority, project) => {\n  let newTodo = todoItem(title, description, dueDate, priority, project);\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"].push(newTodo);\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"]);\n  Object(_todoDOM__WEBPACK_IMPORTED_MODULE_1__[\"appendATodo\"])(newTodo);\n  Object(_projectCreation__WEBPACK_IMPORTED_MODULE_2__[\"appendToProject\"])(newTodo);\n}\n\n\n\n//# sourceURL=webpack:///./src/todoCreation.js?");

/***/ }),

/***/ "./src/todoDOM.js":
/*!************************!*\
  !*** ./src/todoDOM.js ***!
  \************************/
/*! exports provided: appendATodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendATodo\", function() { return appendATodo; });\n/* harmony import */ var _todoInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInteractions */ \"./src/todoInteractions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst todoSpace = document.querySelector('#todo-space');\nconst newTodoBtn = document.querySelector('#new-todo-btn');\n// const mainSection = document.querySelector('#main-section');\n\n// Put a new to-do onto the page\nconst appendATodo = (newTodo) => {\n\n  const todoContainer = document.createElement('div');\n  todoContainer.classList.add('todo-elements');\n  todoContainer.setAttribute('data', `order-${_index__WEBPACK_IMPORTED_MODULE_1__[\"todos\"].indexOf(newTodo)}`);\n  todoSpace.insertBefore(todoContainer, newTodoBtn);\n\n  // first row in a to-do element\n  const line1 = document.createElement('div');\n  line1.setAttribute('id', 'line1');\n  todoContainer.appendChild(line1);\n\n  // Complete button\n  const completeBtn = document.createElement('div');\n  completeBtn.setAttribute('id', 'complete-btn');\n  completeBtn.innerHTML = `<a  href=\"#\"><i class=\"fa fa-check-circle-o fa-2x\" aria-hidden=\"true\"></i></a>`\n  line1.appendChild(completeBtn);\n  let isClicked = false;\n\n  // Complete button functionality\n  completeBtn.addEventListener('click', () => {\n    if (!isClicked) {\n      const todoInputElements = document.querySelectorAll('.todo-input-elements');\n      completeBtn.firstChild.style.color = '#D00000';\n      todoContainer.style.backgroundColor = '#44AF69';\n      todoInputElements.forEach((element) => element.style.cssText = 'text-decoration: line-through;');\n      isClicked = true;\n    } else {\n      // If clicked second time - delete the to-do element\n      todoSpace.removeChild(todoContainer);\n      Object(_todoInteractions__WEBPACK_IMPORTED_MODULE_0__[\"completeATodo\"])(newTodo);\n      isClicked = false;\n    }\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"helperFunctions\"])().toShow(undoBtn);\n  });\n\n  let todoTitle = document.createElement('div');\n  todoTitle.classList.add('todo-title', 'todo-input-elements');\n  todoTitle.textContent = newTodo.title;\n  line1.appendChild(todoTitle);\n\n  let todoDescription = document.createElement('div');\n  todoDescription.classList.add('todo-description', 'todo-input-elements');\n  todoDescription.textContent = newTodo.description;\n  line1.appendChild(todoDescription);\n\n  const todoOptions = document.createElement('div');\n  todoOptions.setAttribute('id', 'todo-options');\n  line1.appendChild(todoOptions);\n\n  // Undo, edit and delete buttons\n\n  // Undo button\n  const undoBtn = document.createElement('div');\n  undoBtn.setAttribute('id', 'undo-btn');\n  Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"helperFunctions\"])().toHide(undoBtn); // We need it only when the complete button has been clicked\n  undoBtn.innerHTML = `<a href=\"#\" ><i class=\"fa fa-undo fa-2x\" aria-hidden=\"true\"></i>\n  </a>`;\n  todoOptions.appendChild(undoBtn);\n\n  // Undo button functionality\n  undoBtn.addEventListener('click', () => {\n    isClicked = false;\n    completeBtn.firstChild.style.color = '';\n    todoContainer.style.backgroundColor = '';\n    const todoInputElements = document.querySelectorAll('.todo-input-elements');\n    todoInputElements.forEach((element) => element.style.cssText = '');\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"helperFunctions\"])().toHide(undoBtn);\n  });\n\n  // Edit button\n  const editBtn = document.createElement('div');\n  editBtn.setAttribute('id', 'edit-btn');\n  editBtn.innerHTML = `<a href=\"#\"><i class=\"fa fa-pencil-square fa-2x\" aria-hidden=\"true\"></i></a>`;\n  todoOptions.appendChild(editBtn);\n\n  // Edit button functionality\n  editBtn.addEventListener('click', () => {\n\n    const editContainer = document.querySelector('#edit-container');\n    const editSubmitBtn = document.querySelector('#edit-submit-btn');\n\n    let editTitle = document.querySelector('#edit-title');\n    let editDescription = document.querySelector('#edit-description');\n    let editDate = document.querySelector('#edit-date');\n    let editProjectName = document.querySelector('#edit-project');\n    let editPriority = document.querySelector('#edit-priority');\n    \n    editTitle.value = newTodo.title;\n    editDescription.value = newTodo.description;\n    editDate.value = newTodo.dueDate;\n    editProjectName.value = newTodo.project;\n    editPriority.value = newTodo.priority;\n\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"helperFunctions\"])().toShow(editContainer);\n\n    // Changing the values in the to-do according to the changes in the edit box\n    editSubmitBtn.addEventListener('click', () => {\n\n      newTodo.title = editTitle.value;\n      todoTitle.textContent = newTodo.title;\n\n      newTodo.description = editDescription.value;\n      todoDescription.textContent = newTodo.description;\n\n      newTodo.dueDate = editDate.value;\n      todoDueTime.textContent = newTodo.dueDate;\n\n      newTodo.priority = editPriority.value;\n      todoPriority.textContent = newTodo.priority;\n\n      newTodo.project = editProjectName.value;\n      todoProjectName = newTodo.project;\n\n      console.log(newTodo);\n      Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"helperFunctions\"])().toHide(editContainer);\n    });\n\n    // Hide the container when clicked outside of it\n    window.addEventListener('click', () => {\n      Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"helperFunctions\"])().hideBox(editContainer, editBtn);\n    });\n\n  });\n\n  // Delete button\n  const delBtn = document.createElement('div');\n  delBtn.classList.add('del-btn');\n  delBtn.innerHTML = `<a href=\"#\"><i class=\"fa fa-trash fa-2x\" aria-hidden=\"true\"></i></a>`;\n  todoOptions.appendChild(delBtn);\n\n  // Delete button functionality\n  delBtn.addEventListener('click', () => {\n    todoSpace.removeChild(todoContainer);\n    Object(_todoInteractions__WEBPACK_IMPORTED_MODULE_0__[\"deleteATodo\"])(newTodo);\n  });\n\n  // second row in a to-do element\n  const line2 = document.createElement('div');\n  line2.setAttribute('id', 'line2');\n  todoContainer.appendChild(line2);\n\n  let todoDueTime = document.createElement('div');\n  todoDueTime.classList.add('due-time', 'todo-input-elements');\n  todoDueTime.innerHTML = `<i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> ${newTodo.dueDate}`;\n  line2.appendChild(todoDueTime);\n\n  let todoPriority = document.createElement('div');\n  todoPriority.classList.add('todo-priority', 'todo-input-elements');\n  todoPriority.textContent = newTodo.priority;\n  line2.appendChild(todoPriority);\n\n  let todoProjectName = document.createElement('div');\n  todoProjectName.classList.add('todo-project-name', 'todo-input-elements');\n  todoProjectName.textContent = newTodo.project;\n  line2.appendChild(todoProjectName);\n}\n\n\n\n//# sourceURL=webpack:///./src/todoDOM.js?");

/***/ }),

/***/ "./src/todoInteractions.js":
/*!*********************************!*\
  !*** ./src/todoInteractions.js ***!
  \*********************************/
/*! exports provided: deleteATodo, completeATodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteATodo\", function() { return deleteATodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completeATodo\", function() { return completeATodo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst completeATodo = (newTodo) => {\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"completedTodos\"].push(newTodo);\n  deleteATodo(newTodo);\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"]);\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"completedTodos\"]);\n}\n\nconst deleteATodo = (newTodo) => {\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"].indexOf(newTodo));\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"].splice(_index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"].indexOf(newTodo), 1);\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"]);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/todoInteractions.js?");

/***/ })

/******/ });