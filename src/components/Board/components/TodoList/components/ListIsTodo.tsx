import { Task } from "models/Board"
import { Todo } from "./Todo"

type Props = {
  todos: Task[]
}

export function ListIsTodo({ todos }: Props) {
  return (
    <div className="todo">
      <h4 className="todolist-title title-todo">todo</h4>
      <ul className="todolist-items">
        {todos.map(todo => <Todo key={todo.id} title={todo.attributes.title} />)}
      </ul>
    </div>
  )
}