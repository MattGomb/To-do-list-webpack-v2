import './style.css';

import updateid from './modules/updateid.js';

import Task from './modules/constructor.js';

import Storage from './modules/storage.js';

import Interface from './modules/interface.js';

import removeFromStorage from './modules/removeFromStorage.js';

import toggleCompleted from './modules/toggleCompleted.js';

import clearAll from './modules/clearAll.js';

document.addEventListener('DOMContentLoaded', Interface.displayTasks);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const description = document.querySelector('#taskInput').value;

  let tasks = [];
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const id = tasks.length !== 0 ? tasks.length + 1 : 1;
  const task = new Task(description, id);

  Interface.addTaskToList(task);

  Storage.addTask(task);

  Interface.clearFields();
});

document.querySelector('#toDoItems').addEventListener('click', (e) => {
  if (e.target.textContent === '⋮') {
    e.target.nextElementSibling.classList.remove('hidden');
    e.target.classList.add('hidden');
    e.target.previousElementSibling.lastElementChild.removeAttribute('disabled');
  }
  if (e.target.textContent === '🗑') {
    const { id } = e.target.parentElement;
    e.target.parentElement.remove();
    removeFromStorage(id);
    Interface.displayTasks();
  }
});

document.querySelector('#toDoItems').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.target.setAttribute('disabled', true);
    e.target.parentElement.nextElementSibling.classList.remove('hidden');
    e.target.parentElement.nextElementSibling.nextElementSibling.classList.add('hidden');
    const selectedTask = Storage.getTasks()
      .find((task) => task.id === Number(e.target.parentElement.parentElement.id));
    const selectedDesc = e.target.value;
    Storage.updateTask(selectedTask, selectedDesc);
  }
});

document.querySelector('#toDoItems').addEventListener('change', (e) => {
  const { id } = e.target.parentElement.parentElement;
  const completed = e.target.checked;
  toggleCompleted(id, completed);
});

document.querySelector('#clearAllBtn').addEventListener('click', () => {
  clearAll();
  updateid.storage();
  Interface.displayTasks();
});
