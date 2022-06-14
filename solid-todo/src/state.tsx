import { createSignal } from "solid-js";

const [getTodos, setTodos] = createSignal<string[]>([])


const setTodo = (text: string) => {
  setTodos(() => [...getTodos(), text])
}

const removeTodo = (index: number) => {
  const todos = getTodos()
  const newList = todos.filter((_, i) => index !== i)

  setTodos(() => [...newList])
}

export {
  getTodos,
  setTodo,
  removeTodo
}
