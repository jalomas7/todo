import React, { FunctionComponent } from "react";
import { TodoItem } from "../../types";
import './todoItem.css';

type TodoItemComponentProps = {
  item: TodoItem;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

export const TodoItemComponent: FunctionComponent<TodoItemComponentProps> = ({
  item: { name, dueDate, completed, id },
  onDelete,
  onComplete
}) => {
  return (
    <div className="todo-item">
      {name} due date: {dueDate}{" "}, completed?: {completed ? 'true' : 'false'}
      <div className="todo-item-complete-button" onClick={() => onComplete(id)}>✓</div>
      <div className="todo-item-delete-button" onClick={() => onDelete(id)}>X</div>
    </div>
  );
};
