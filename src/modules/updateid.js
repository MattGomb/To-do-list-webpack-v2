const updateid = {
  storage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((element, index) => {
      element.id = index + 1;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};

export default updateid;
