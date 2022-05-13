import React, { useContext } from "react";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todos-store";

const Todos: React.FC = (props) => {
  const todosContext = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          removeItem={todosContext.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
