import React, { FunctionComponent } from "react";
import { useTodoContext } from "../providers";
import { TodoItemComponent } from "./TodoItem";
import './body.css';

export const Body: FunctionComponent = () => {
  const { todoItems, removeTodoItem, markItemComplete } = useTodoContext();

  return (
    <div className="main-body">
      <div className='incomplete-items-container'>
      {todoItems.filter(todo => !todo.completed).map((item) => (
        <TodoItemComponent
          item={item}
          onDelete={removeTodoItem}
          onComplete={markItemComplete}
        />
      ))}
      </div>
      <div className='complete-items-container'>
      {todoItems.filter(todo => todo.completed).map((item) => (
        <TodoItemComponent
          item={item}
          onDelete={removeTodoItem}
          onComplete={markItemComplete}
        />
      ))}
      </div>
    </div>
  );
};
