class Todo {
  text: string;
  id: string;

  constructor(textContent: string) {
    this.text = textContent;
    this.id = new Date().toISOString();
  }
}

export default Todo;
