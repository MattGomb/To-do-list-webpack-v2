/** * @jest-environment jsdom */

import toggleCompleted from '../toggleCompleted.js';

jest.mock('../toggleCompleted.js');

const tasks = [
  {
    description: 'Mátyás',
    id: 1,
    completed: false,
    editable: false,
  }
];

localStorage.setItem('tasks', JSON.stringify(tasks));

describe('Updating completed status', () => {
  test('if the completed attribute changes', () => {
    toggleCompleted();
    const dataStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    expect(dataStorage[0].completed).toBeTruthy();
  });
}); 