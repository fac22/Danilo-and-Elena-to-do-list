// ---------------------------  add/hide delete button
const tasks = document.querySelectorAll('.task');
const deleteTasks = document.querySelectorAll('.delete-task');

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
}

// ---------------------------  user adds new task
const addBtn = document.querySelector('#add-icon');
const form = document.querySelector('form');
const taskDescription = document.querySelector('#add-task');

function addTask(e) {
  e.preventDefault();

  appendListItem(taskDescription.value);
  taskDescription.value = '';
}

addBtn.addEventListener('click', addTask);

// ---------------------------  init

function init() {
  taskDescription.value = '';
}

window.addEventListener('load', init);
