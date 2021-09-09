const addBtn = document.querySelector('#add-icon');
const form = document.querySelector('form');
var tasks = document.querySelectorAll('.task');
var deleteTasks = document.querySelectorAll('.delete-task');
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
const taskDescription = document.querySelector('#add-task');

// ---------------------------  add/hide delete button

function showDelete() {
  this.children[2].classList.remove('hide');
}
function hideDelete() {
  this.children[2].classList.add('hide');
}

tasks.forEach((task) => task.addEventListener('mouseover', showDelete));
tasks.forEach((task) => task.addEventListener('mouseout', hideDelete));

// ---------------------------  append new list item

function appendListItem(task) {
  const list = document.querySelector('ul');
  const template = document.querySelector('#template-task');
  const domFragment = template.content.cloneNode(true);

  domFragment.querySelector('li p').textContent = task;
  list.appendChild(domFragment);

  domUpdate();
}

// ---------------------------  DOM update
// PAUSE HERE for a while...
// with this function, I am re-scanning the DOM - we need to do this after the addition of a new list element through the usage of <template>
// if we don't update the DOM, we cannot use the checkbox cross-out and delete button on new added elements

function domUpdate() {
  tasks = document.querySelectorAll('.task');
  deleteTasks = document.querySelectorAll('.delete-task');
  checkboxes = document.querySelectorAll('input[type="checkbox"]');

  tasks.forEach((task) => task.addEventListener('mouseover', showDelete));
  tasks.forEach((task) => task.addEventListener('mouseout', hideDelete));

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('click', checkTask)
  );
}

// ---------------------------  user adds new task

function addTask(e) {
  e.preventDefault();

  appendListItem(taskDescription.value);
  taskDescription.value = '';
}

addBtn.addEventListener('click', addTask);

// ---------------------------  init

function init() {
  taskDescription.value = '';
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
}

window.addEventListener('load', init);

// ---------------------------  check task off

function checkTask() {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      checkbox.nextElementSibling.classList.add('strike-through');
    } else {
      checkbox.nextElementSibling.classList.remove('strike-through');
    }
  });
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', checkTask));
