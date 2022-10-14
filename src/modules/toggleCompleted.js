const toggleCompleted = (id, completed) => {
  let tasks = [];
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  if (completed) {
    tasks[id - 1].completed = true;
  } else {
    tasks[id - 1].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));

  return tasks[id - 1];
};

export default toggleCompleted;