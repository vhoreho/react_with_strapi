import { Task } from 'models/Board'
import { ListIsDoing, ListIsDone, ListIsTodo } from './components'

type Props = {
  todos: Task[]
}

export function TodoList({ todos }: Props) {
  const filteredIsTodo = todos.filter(todo => todo.attributes.status === 'todo');
  const filteredIsDone = todos.filter(todo => todo.attributes.status === 'done')
  const filteredIsDoing = todos.filter(todo => todo.attributes.status === 'doing')

  return (
    <div className="todolist">
      <ListIsTodo todos={filteredIsTodo} />
      <ListIsDoing todos={filteredIsDoing} />
      <ListIsDone todos={filteredIsDone} />
    </div>
  )
}