import { Component, createSignal } from "solid-js";
import { setTodo } from "../state";


const TodoInput: Component = () => {

  const [value, setValue] = createSignal<string>("")


  return (
    <div>
      <input type="text" id="todo-input" value={value()} oninput={(e) => {
      setValue(() => e.currentTarget.value)
      }} onkeydown={(e) => {
        if (e.code === "Enter") {
        setTodo(value())
        setValue(() => "")
        }
      }} />
    </div>
  )
}

export default TodoInput;
