/** * @jest-environment jsdom */

import Storage from "../storage.js";

jest.mock('../storage.js');

beforeEach(() => {
  Storage.mockClear();
});

window.localStorage = Storage.prototype;

const tasks = [
    {
      description: 'Mátyás',
      id: 1,
      completed: false,
      editable: false,
    }
  ];

  localStorage.setItem('tasks', JSON.stringify(tasks));

describe('testing class Storage', () => {
  test('check upDate task', () => {
    const newTask = [
        {
          description: 'Microverse',
          id: 1,
          completed: false,
          editable: false,
        },
      ];
    Storage.updateTask();
    JSON.parse(localStorage.getItem('tasks')) || [];  
    expect(tasks.description).toEqual(newTask.description);
  });
});