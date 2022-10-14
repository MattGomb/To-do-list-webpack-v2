/** * @jest-environment jsdom */

import clearAll from '../clearAll.js';

jest.mock('../clearAll.js');

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
  }
];

localStorage.setItem('tasks', JSON.stringify(newTasks));

describe('check the localStorage', () => {
  test('Remove from storage', () => {
    const dataStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    clearAll()
    expect(dataStorage).toHaveLength(1);
  });
});