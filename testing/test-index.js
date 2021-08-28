test('Submitting a new task adds it to the list', () => {
  // get the input value from the adding new task field
  const addTask = document.querySelector('#add-task');
  // submit (press to add) the new task to the list
  const submitTask = document.querySelector('#submit-task');
  // the task as it appears on the list - checking only the last node, as every new task appears at the end of the list
  const listTask = document.querySelectorAll('.task p')[listTask.length - 1];
});
