/** * @jest-environment jsdom */

import removeFromStorage from '../removeFromStorage.js';

window.localStorage = Storage.prototype;

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
    completed: false,
    editable: false,
  },
];

localStorage.setItem('tasks', JSON.stringify(newTasks));

describe('check the localStorage', () => {
  test('Remove from storage', () => {
    const task1 = [
      {
        description: 'Mátyás',
        id: 1,
        completed: false,
        editable: false,
      },
    ];
    removeFromStorage(2);
    const dataStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    expect(dataStorage).toEqual(task1);
  });
});
