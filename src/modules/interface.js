import Storage from './storage.js';

export default class Interface {
  static displayTasks() {
    const tasks = Storage.getTasks();
    document.querySelector('#toDoItems').innerHTML = '';
    if (tasks.length !== 0) {
      tasks.forEach((task) => Interface.addTaskToList(task));
    }
  }

  static addTaskToList(task) {
    const list = document.querySelector('#toDoItems');
    const taskelement = document.createElement('li');
    taskelement.setAttribute('id', task.id);
    list.appendChild(taskelement);

    const wrapper = document.createElement('div');
    taskelement.appendChild(wrapper);

    const label = document.createElement('label');
    label.setAttribute('for', `check${task.id}`);
    wrapper.appendChild(label);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');
    checkbox.id = `check${task.id}`;
    wrapper.appendChild(checkbox);

    const text = document.createElement('input');
    text.classList.add('text');
    text.setAttribute('id', `text${task.id}`);
    text.setAttribute('disabled', true);
    text.value = task.description;
    wrapper.appendChild(text);

    const morebtn = document.createElement('button');
    morebtn.classList.add('morebtn');
    morebtn.innerHTML = '⋮';
    morebtn.id = `m${task.id}`;
    taskelement.appendChild(morebtn);

    const deletebtn = document.createElement('button');
    deletebtn.classList.add('hidden');
    deletebtn.classList.add('deletebtn');
    deletebtn.innerHTML = '🗑';
    deletebtn.id = `d${task.id}`;
    taskelement.appendChild(deletebtn);
  }

  static clearFields() {
    document.querySelector('#taskInput').value = '';
  }
}
