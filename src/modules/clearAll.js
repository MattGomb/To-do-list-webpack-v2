function clearAll() {
    let tasks = [];
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const newTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  
  return newTasks;

}

export default clearAll;