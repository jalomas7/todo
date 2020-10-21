import React, { FunctionComponent, useState } from 'react';
import { useTodoContext } from '../providers';

export const Header: FunctionComponent = () => {

    const [addingItem, setAddingItem] = useState<boolean>(false);
    const [itemName, setItemName] = useState<string>('');
    const [itemDueDate, setItemDueDate] = useState<Date>(new Date());

    const {addTodoItem} = useTodoContext();

    return (
      <header className="main-header">
        <button
          className="add-todo-item-button"
          onClick={() => setAddingItem(true)}
        >
          +
        </button>
        {addingItem && (
          <div className="add-todo-item-menu">
            <input type="text" onChange={(e) => setItemName(e.target.value)} />
            <input
              type="datetime-local"
              onChange={(e) => setItemDueDate(new Date(e.target.value))}
            />
            <button
              onClick={() => {
                addTodoItem({ name: itemName, dueDate: itemDueDate });
                setAddingItem(false);
              }}
            />
          </div>
        )}
      </header>
    );
}