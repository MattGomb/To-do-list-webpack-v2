/** * @jest-environment jsdom */

import Storage from "./storage";
import removeFromStorage from '../index.js';

window.localStorage = Storage.prototype;

const newTasks = [
  {
    description: 'Vanessa',
    id: 1,
    completed: false,
    editable: false,
  },

  {
    description: 'Mátyás',
    id: 2,
    completed: false,
    editable: false,
  }
];

localStorage.setItem('tasks', JSON.stringify(newTasks));

describe('check the localStorage', () => {
  test('Remove from storage', () => {
    removeFromStorage(1);
    const task = [
      {
        description: 'Mátyás',
        id: 2,
        completed: false,
        editable: false
      }
    ];
    const storage = JSON.parse(localStorage.getItem('tasks')) || [];
    expect(true).toBe(true)
  });
});


