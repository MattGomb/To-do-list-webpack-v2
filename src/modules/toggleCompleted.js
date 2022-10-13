function toggleCompleted(e) {
  let tasks = [];
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const { id } = e.target.parentElement.parentElement;
  if (e.target.checked) {
    tasks[id - 1].completed = true;
  } else {
    tasks[id - 1].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default toggleCompleted;