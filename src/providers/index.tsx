import React, { createContext, FunctionComponent, useContext, useState } from 'react';
import { TodoItem } from '../types';

export type TodoContext = {
    todoItems: TodoItem[];
    addTodoItem: (todoItem: TodoItem) => void;
    removeTodoItem: (id: string) => void;
    markItemComplete: (id: string) => void;
};

const defaultTodoContext: TodoContext = {
    todoItems: [],
    addTodoItem: () => {},
    removeTodoItem: () => {},
    markItemComplete: () => {}
};

const TodoContext = createContext<TodoContext>(defaultTodoContext);
export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: FunctionComponent = ({children}) => {

    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

    const addTodoItem = (todoItem: TodoItem) => setTodoItems([...todoItems, todoItem]);
    const removeTodoItem = (id: string) => {
        setTodoItems(todoItems.filter((item) => item.id !== id))
    };

    const markItemComplete = (id: string) => {
        const newItems = todoItems.slice();
        const item = todoItems.findIndex(item => item.id === id);
        if(item === -1) {
            return;
        }

        newItems[item].completed = true;
        setTodoItems(newItems);
    }

    const value: TodoContext = {
        todoItems,
        addTodoItem,
        removeTodoItem,
        markItemComplete
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}