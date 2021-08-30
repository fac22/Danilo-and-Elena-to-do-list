// ****Add tasks to a list so that I can keep track of them****
test('Submitting a new task adds it to the list', () => {
  // get the input value from the adding new task field
  const addTask = document.querySelector('#add-task');
  // submit (press to add) the new task to the list
  const submitTask = document.querySelector('#submit-task');
  // the task as it appears on the list
  // checking only the last node, as every new task appears at the end of the list
  const addedTask = document.querySelectorAll('.task p')[addedTask.length - 1];

  // automating user action of adding new task
  addTask.value = 'buy vegetables';
  submitTask.click();
  equal(addedTask.textContent, 'buy vegetables');

  // resetting the list node so we can test for another task value
  addedTask.textContent = '';

  // automating NEW user action of adding new task
  addTask.value = 'finish my book';
  submitTask.click();
  equal(addedTask.textContent, 'finish my book');
  addedTask.textContent = '';
});

// ****Check things off my list so that I can see what I’ve done***
test('Checking an entry marks it as complete', () => {
  // get input checkbox from first task of the list
  // (here I am assuming that every new task generates a checkbox with a unique id)
  const checkbox1 = document.querySelector('#checkbox1');

  equal(checkbox1.checked, true);
});

// ****Delete things from the list if I don’t need to do them anymore****
test('Deleting an entry removes it from the list', () => {
  // get delete button
  const deletBtn = document.querySelector('.delete-task');
  // get a task
  const selectTask = document.querySelector('.task');

  deleteBtn.click();
  equal(selectTask.classList.add('hidden'), true);
});
