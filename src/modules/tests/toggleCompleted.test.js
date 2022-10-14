/** * @jest-environment jsdom */

import toggleCompleted from '../toggleCompleted.js';

const tasks = [
  {
    description: 'Marco',
    id: 1,
    completed: false,
    editable: false,
  },
];

const result = {
  description: 'Marco',
  id: 1,
  completed: true,
  editable: false,
};

localStorage.setItem('tasks', JSON.stringify(tasks));

describe('Updating completed status', () => {
  test('if the completed attribute changes', () => {
    expect(toggleCompleted(1, true)).toEqual(result);
  });
});