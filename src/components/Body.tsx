import React, { FunctionComponent } from "react";
import { useTodoContext } from "../providers";

export const Body: FunctionComponent = () => {
  const { todoItems } = useTodoContext();

  return (
    <div className="main-body">
      {todoItems.map((item) => (
        <div className="todo-item">
          {item.name} due date: {item.dueDate.toISOString()}{" "}
        </div>
      ))}
    </div>
  );
};
