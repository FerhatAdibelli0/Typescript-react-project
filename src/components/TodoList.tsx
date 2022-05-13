import React from "react";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{ text: string; removeItem: () => void }> = (
  props
) => {
  const itemClickHandler = (event: React.MouseEvent) => {
    props.removeItem();
  };

  return (
    <li onClick={itemClickHandler} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoList;
