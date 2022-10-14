import updateid from './updateid.js'
import Interface from '../modules/interface.js';

function clearAll() {
    let tasks = [];
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const newTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  updateid.storage();
  Interface.displayTasks();
}

export default clearAll;