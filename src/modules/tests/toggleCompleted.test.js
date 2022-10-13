/** * @jest-environment jsdom */

import toggleCompleted from "../toggleCompleted.js";
import Storage from "../storage.js";

jest.mock('../toggleCompleted.js');

beforeEach(() => {
  toggleCompleted.mockClear();
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

describe('Updating completed status', () => {
  test('if the completed attribute changes', () => {
    toggleCompleted(0);
    expect(tasks[0].completed).toBeTruthy();
  });
}); 