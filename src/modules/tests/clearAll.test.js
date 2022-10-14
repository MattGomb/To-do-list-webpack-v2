/** * @jest-environment jsdom */

import clearAll from '../clearAll.js';

describe('clear all complete task', () => {
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

  localStorage.setItem('tasks', JSON.stringify(newTasks));

  it('clear one task', () => {
    expect(clearAll()).toHaveLength(1);
  });
});