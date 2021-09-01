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
