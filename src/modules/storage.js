export default class Storage {
  static getTasks() {
    let tasks;
    if (!localStorage.getItem('tasks')) {
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

  static updateTask(task, description) {
    const tasks = Storage.getTasks();

    const activeTask = tasks.find((selected) => selected.id === task.id);

    activeTask.description = description;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
