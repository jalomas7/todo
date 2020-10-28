import React, { createContext, FunctionComponent, useContext, useState } from 'react';
import { TodoItem } from '../types';

export type TodoContext = {
    todoItems: TodoItem[];
    addTodoItem: (todoItem: TodoItem) => void;
    removeTodoItem: (id: number) => void;
    markItemComplete: (id: number) => void;
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
    const removeTodoItem = (id: number) => {
        setTodoItems(todoItems.filter((_, i) => i !== id))
    };

    const markItemComplete = (id: number) => {
        const newItems = todoItems.slice();
        newItems[id].completed = true;
        setTodoItems(newItems);
    };

    const value: TodoContext = {
        todoItems,
        addTodoItem,
        removeTodoItem,
        markItemComplete
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}