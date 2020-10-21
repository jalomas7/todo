import React from 'react';
import {TodoProvider} from './providers';
import {Body} from './components/Body';
import {Header} from './components/Header';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Header /> 
        <Body />
      </div>
    </TodoProvider>
  );
}

export default App;
