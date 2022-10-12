/** * @jest-environment jsdom */

import Interface from '../interface.js';

document.body.innerHTML = `
  <input id="taskInput" value="item 1">
  <ul id="toDoItems">
    <li></li>
  </ul>
`;

const task = {
  description: 'content 1',
  id: 1,
  completed: false,
  editable: false,
};

describe('testing the interface functions', () => {
  test('testing the clearFields function', () => {
    const input = document.getElementById('taskInput');
    Interface.clearFields();
    expect(input.value).toBe('');
  });
  test('testing the add function', () => {
    const list = document.getElementById('toDoItems');
    expect(Interface.addTaskToList(task)).toBe(list.lastElementChild);
  });
});
