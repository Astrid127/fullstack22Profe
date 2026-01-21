class Task {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = false;
    this.date = new Date().toLocaleDateString();
  }
}

export default Task;
