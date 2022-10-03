type Props = {
  title: string
}

export function Todo({ title }: Props) {
  return (
    <li className="todo-card">
      {title}
    </li>
  )
}