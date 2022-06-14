import type { Component } from 'solid-js';

import styles from './App.module.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        What is there TODO?
        <TodoList />
        <TodoInput />
      </header>
    </div>
  );
};

export default App;
