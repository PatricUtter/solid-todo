import { Component } from "solid-js";
import "../index.css"

interface TheProps {
  text: string;
  onRemove: () => void;
}

const TodoListItem: Component<TheProps> = ({ text, onRemove }) => {

  return (
    <div class="todo-list-item">
      <span>
        {text}
      </span>
      <span onclick={() => onRemove()} class="remove-button">X</span>
    </div>
  )
}

export default TodoListItem;
