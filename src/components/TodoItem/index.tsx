import React, { FunctionComponent } from "react";
import { TodoItem } from "../../types";
import './todoItem.css';

type TodoItemComponentProps = {
  item: TodoItem;
  onDelete: () => void;
  onComplete: () => void;
};

export const TodoItemComponent: FunctionComponent<TodoItemComponentProps> = ({
  item: { name, dueDate, completed },
  onDelete,
  onComplete
}) => {
  return (
    <div className="todo-item">
      {name} due date: {dueDate.toISOString()}{" "}, completed?: {completed ? 'true' : 'false'}
      <div className="todo-item-complete-button" onClick={onComplete}>✓</div>
      <div className="todo-item-delete-button" onClick={onDelete}>X</div>
    </div>
  );
};
