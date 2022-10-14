/** * @jest-environment jsdom */

import Storage from '../storage.js';

window.localStorage = Storage.prototype;

describe('test storage functionalities', () => {
  const newTasks = [
    {
      description: 'Mátyás',
      id: 1,
      completed: false,
      editable: false,
    },
    {
      description: 'Vanessa',
      id: 2,
      completed: true,
      editable: false,
    },
    {
      description: 'Vanessa',
      id: 3,
      completed: true,
      editable: false,
    },
  ];

  const task = {
    description: 'Marco',
    id: 4,
    completed: false,
    editable: false,
  };

  const task2 = {
    description: 'new description',
    id: 4,
    completed: false,
    editable: false,
  };
  localStorage.setItem('tasks', JSON.stringify(newTasks));

  it('getting a task from storage', () => {
    expect(Storage.getTasks()).toHaveLength(3);
  });
  it('adding a task to storage', () => {
    expect(Storage.addTask(task)).toHaveLength(4);
  });
  it('updating description in storage', () => {
    expect(Storage.updateTask(task, 'new description')).toStrictEqual(task2);
  });
});
