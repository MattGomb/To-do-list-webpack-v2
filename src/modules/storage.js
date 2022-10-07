export default class Storage {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static addTask(task) {
    const tasks = Storage.getTasks();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
