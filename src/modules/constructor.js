// module to create task
export default class Task {
  constructor(description = '', id = 1) {
    this.description = description;
    this.id = id;
    this.completed = false;
    this.editable = false;
  }
}
