import React, { FunctionComponent } from "react";
import { TodoItem } from "../../types";
import './todoItem.css';

type TodoItemComponentProps = {
  item: TodoItem;
  onDelete: () => void;
};

export const TodoItemComponent: FunctionComponent<TodoItemComponentProps> = ({
  item: { name, dueDate },
  onDelete
}) => {
  return (
    <div className="todo-item">
      {name} due date: {dueDate.toISOString()}{" "}
      <div className="todo-item-delete-button" onClick={onDelete}>X</div>
    </div>
  );
};
