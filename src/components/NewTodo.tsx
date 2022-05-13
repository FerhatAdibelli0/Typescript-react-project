import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-store";

const NewTodo: React.FC = (props) => {
  const enteredTextRef = useRef<HTMLInputElement>(null);
  const todosContext = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = enteredTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosContext.onAddToDo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="newTodo">Adding new Todo Item</label>
      <input type="text" id="newTodo" ref={enteredTextRef} />
      <button>Add Item</button>
    </form>
  );
};
export default NewTodo;
