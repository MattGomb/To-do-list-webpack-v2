import updateid from './updateid.js';

const removeFromStorage = (id) => {
  let tasks = [];
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const newTasks = tasks.filter((task) => task.id !== +id);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  updateid.storage();
};

export default removeFromStorage;