import React, { useState } from "react";
import Todo from "../models/todo";

type ObjectShape = {
  items: Todo[];
  onAddToDo: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodoContext = React.createContext<ObjectShape>({
  items: [],
  onAddToDo: (text: string) => {},
  removeItem: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((previousState) => previousState.concat(newTodo));
  };

  const removeItemHandler = (id: string) => {
    setTodos((previousState) => previousState.filter((item) => item.id !== id));
  };

  const contextValue = {
    items: todos,
    onAddToDo: addNewTodoHandler,
    removeItem: removeItemHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
