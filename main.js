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

/***/ "./src/createATodo.js":
/*!****************************!*\
  !*** ./src/createATodo.js ***!
  \****************************/
/*! exports provided: createATodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createATodo\", function() { return createATodo; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst todoItem = (title, description, dueDate, priority, project, isComplete) => {\n  isComplete = false;\n  return {title, description, dueDate, priority, project, isComplete}\n}\n\nlet test = todoItem('Do the dishes', 'Mom asked me to do the dishes', 'Monday 05/12/2020', 'Priority 1', 'Default');\n\nconst createATodo = (title, description, dueDate, priority, project) => {\n  let newTodo = todoItem(title, description, dueDate, priority, project);\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"].push(newTodo);\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__[\"todos\"]);\n  appendATodo(newTodo);\n}\n\nconst todoSpace = document.querySelector('#todo-space');\nconst newTodoBtn = document.querySelector('#new-todo-button');\n\n// Put a new to-do onto the page\nconst appendATodo = (newTodo) => {\n\n  const todoContainer = document.createElement('div');\n  todoContainer.classList.add('todo-elements');\n  todoSpace.insertBefore(todoContainer, newTodoBtn);\n\n  // first row in a to-do element\n  const line1 = document.createElement('div');\n  line1.setAttribute('id', 'line1');\n  todoContainer.appendChild(line1);\n\n  const completeBtn = document.createElement('div');\n  completeBtn.setAttribute('id', 'complete-btn');\n  completeBtn.innerHTML = `<a  href=\"#\"><i class=\"fa fa-check-circle-o fa-2x\" aria-hidden=\"true\"></i></a>`\n  line1.appendChild(completeBtn);\n\n  const todoTitle = document.createElement('div');\n  todoTitle.classList.add('todo-title');\n  todoTitle.textContent = newTodo.title;\n  line1.appendChild(todoTitle);\n\n  const todoDescription = document.createElement('div');\n  todoDescription.classList.add('todo-description');\n  todoDescription.textContent = newTodo.description;\n  line1.appendChild(todoDescription);\n\n  const todoOptions = document.createElement('div');\n  todoOptions.setAttribute('id', 'todo-options');\n  line1.appendChild(todoOptions);\n\n  // Undo, edit and delete buttons\n  const undoBtn = document.createElement('div');\n  undoBtn.setAttribute('id', 'undo-btn');\n  undoBtn.innerHTML = `<a href=\"#\" ><i class=\"fa fa-undo fa-2x\" aria-hidden=\"true\"></i>\n  </a>`;\n  todoOptions.appendChild(undoBtn);\n\n  const editBtn = document.createElement('div');\n  editBtn.setAttribute('id', 'edit-btn');\n  editBtn.innerHTML = `<a href=\"#\"><i class=\"fa fa-pencil-square fa-2x\" aria-hidden=\"true\"></i></a>`;\n  todoOptions.appendChild(editBtn);\n\n  const delBtn = document.createElement('div');\n  delBtn.setAttribute('id', 'del-btn');\n  delBtn.innerHTML = `<a href=\"#\"><i class=\"fa fa-trash fa-2x\" aria-hidden=\"true\"></i></a>`;\n  todoOptions.appendChild(delBtn);\n\n  // second row in a to-do element\n  const line2 = document.createElement('div');\n  line2.setAttribute('id', 'line2');\n  todoContainer.appendChild(line2);\n\n  const todoDueTime = document.createElement('div');\n  todoDueTime.classList.add('due-time');\n  todoDueTime.innerHTML = `<i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> ${newTodo.dueDate}`;\n  line2.appendChild(todoDueTime);\n\n  const todoProjectName = document.createElement('div');\n  todoProjectName.classList.add('todo-project-name');\n  todoProjectName.textContent = newTodo.project;\n  line2.appendChild(todoProjectName);\n}\n\n\n\n//# sourceURL=webpack:///./src/createATodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todos\", function() { return todos; });\n/* harmony import */ var _createATodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createATodo */ \"./src/createATodo.js\");\n\n\nlet todos = [];\n\nconst newTodoBtn = document.querySelector('#new-todo-button');\nconst inputContainer = document.querySelector('#input-container');\n\n// Show the input box\nnewTodoBtn.addEventListener('click', () => {\n  inputContainer.classList.remove('hide');\n  // darken the background\n  inputContainer.style.cssText = '-webkit-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3); box-shadow: 0px 0px 0px 2000px rgba(0,0,0,0.3);';\n});\n\n// Hide the input box if clicked outside\nwindow.addEventListener('click', () => {\n  if (!inputContainer.classList.contains('hide')) {\n    if (!inputContainer.contains(event.target) && event.target !== newTodoBtn) {\n      toHide();\n    }\n  }\n});\n\n// Submit user's input\nconst inputElements = document.querySelectorAll('.input-elements');\nconst submitBtn = document.querySelector('#submit-btn');\n\n  submitBtn.addEventListener('click', () => {\n    const inputTitle = document.querySelector('#input-title').value;\n    const inputDescription = document.querySelector('#input-description').value;\n    const inputDate = document.querySelector('#input-date').value;\n    const inputProject = document.querySelector('#input-project').value;\n    const inputPriority = document.querySelector('#input-priority').value;\n\n    Object(_createATodo__WEBPACK_IMPORTED_MODULE_0__[\"createATodo\"])(inputTitle, inputDescription, inputDate, inputProject, inputPriority);\n    toHide();\n    resetInput();\n  });\n\nfunction toHide() {\n  inputContainer.classList.add('hide');\n  inputContainer.style.cssText = '';\n}\n\nfunction resetInput() {\n  inputElements.forEach((element) => {\n    element.value = '';\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });