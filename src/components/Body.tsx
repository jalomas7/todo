import React, { FunctionComponent } from "react";
import { useTodoContext } from "../providers";
import { TodoItemComponent } from "./TodoItem";

export const Body: FunctionComponent = () => {
  const { todoItems, removeTodoItem, markItemComplete } = useTodoContext();

  return (
    <div className="main-body">
      {todoItems.map((item, i) => (
        <TodoItemComponent
          item={item}
          onDelete={() => removeTodoItem(i)}
          onComplete={() => markItemComplete(i)}
        />
      ))}
    </div>
  );
};
