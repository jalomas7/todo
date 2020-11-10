import React, { FunctionComponent, useState } from 'react';
import { useTodoContext } from '../providers';
import {uuid} from '../utils';

type Props = {
    onItemAdded: () => void;
}

export const ItemForm: FunctionComponent<Props> = ({onItemAdded}) => {
    const [itemName, setItemName] = useState<string>('');
    const [itemDueDate, setItemDueDate] = useState<Date>(new Date());

    const {addTodoItem} = useTodoContext();
    return (
      <div className="add-todo-item-menu">
        <input type="text" onChange={(e) => setItemName(e.target.value)} />
        <input
          type="datetime-local"
          onChange={(e) => setItemDueDate(new Date(e.target.value))}
        />
        <button
          onClick={() => {
            addTodoItem({ name: itemName, dueDate: itemDueDate, completed: false, id: uuid()});
            onItemAdded();
          }}
        />
      </div>
    );
}