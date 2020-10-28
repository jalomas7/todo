import React, { FunctionComponent, useState } from 'react';
import {ItemForm} from './ItemForm';

export const Header: FunctionComponent = () => {

    const [addingItem, setAddingItem] = useState<boolean>(false);

    return (
      <header className="main-header">
        <button
          className="add-todo-item-button"
          onClick={() => setAddingItem(true)}
        >
          +
        </button>
        {addingItem && (
          <ItemForm onItemAdded={() => setAddingItem(false)}/>
        )}
      </header>
    );
}