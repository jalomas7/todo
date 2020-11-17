import React, {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from "react";
import { TodoItem } from "../types";

export type TodoContext = {
  todoItems: TodoItem[];
  addTodoItem: (todoItem: TodoItem) => void;
  removeTodoItem: (id: string) => void;
  markItemComplete: (id: string) => void;
  listName: string;
  setListName: (k: string) => void;
};

const defaultTodoContext: TodoContext = {
  todoItems: [],
  addTodoItem: () => {},
  removeTodoItem: () => {},
  markItemComplete: () => {},
  listName: '',
  setListName: () => {}
};

const TodoContext = createContext<TodoContext>(defaultTodoContext);
export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: FunctionComponent = ({ children }) => {
  const storedTodoItems = useMemo(
    () => JSON.parse(window.localStorage.getItem("todo-items") || "[]"),
    []
  );
  const storedListName = useMemo(
    () => window.localStorage.getItem("todo-list-name"),
    []
  );
  const setStoredTodoItems = (items: TodoItem[]): void => {
    window.localStorage.setItem("todo-items", JSON.stringify(items));
  };

  const [todoItems, setTodoItems] = useState<TodoItem[]>(storedTodoItems);
  const [listName, setListName] = useState<string>(storedListName || '')

  const setStoredListName = (name: string) => {
      setListName(name)
      window.localStorage.setItem('todo-list-name', name);
  } 

  const addTodoItem = (todoItem: TodoItem) => {
    setTodoItems([...todoItems, todoItem]);
    setStoredTodoItems([...todoItems, todoItem]);
  };

  const removeTodoItem = (id: string) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
    setStoredTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const markItemComplete = (id: string) => {
    const newItems = todoItems.slice();
    const item = todoItems.findIndex((item) => item.id === id);
    if (item === -1) {
      return;
    }

    newItems[item].completed = true;
    setTodoItems(newItems);
    setStoredTodoItems(newItems);
  };

  const value: TodoContext = {
    todoItems,
    addTodoItem,
    removeTodoItem,
    markItemComplete,
    listName,
    setListName: setStoredListName
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
