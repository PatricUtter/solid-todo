import { Component } from "solid-js";
import { getTodos, removeTodo } from "../state";
import TodoListItem from "./TodoListItem";


const TodoList: Component = () => {


  return (
    <div>
      {getTodos().map((todo, index) => <TodoListItem text={todo} onRemove={() => removeTodo(index)} />)}
    </div>
  )
}

export default TodoList;
