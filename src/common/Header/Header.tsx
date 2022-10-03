import { useState } from "react"
import { AddNewTask } from "common/AddNewTask"
import { Button } from "react-bootstrap"

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const [boards, setBoards] = useState([]);
  const [show, setShow] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <h2 className="header__title">{title}</h2>
      <Button onClick={handleShow}>+ Add New Task</Button>
      <AddNewTask show={show} onShow={handleClose} />
    </header>
  )
}