import React, { FunctionComponent, useState } from "react";
import { useTodoContext } from "../providers";
import { ItemForm } from "./ItemForm";

export const Header: FunctionComponent = () => {
  const [addingItem, setAddingItem] = useState<boolean>(false);
  const { listName, setListName } = useTodoContext();

  return (
    <header className="main-header">
      <input
        placeholder="list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <button
        className="add-todo-item-button"
        onClick={() => setAddingItem(true)}
      >
        +
      </button>
      {addingItem && <ItemForm onItemAdded={() => setAddingItem(false)} />}
    </header>
  );
};
