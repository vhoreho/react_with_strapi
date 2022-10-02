import { useState, useEffect } from 'react';
import { createBoard, getAllBoards } from 'service/boards';
import { CreateBoardModal, Spinner } from 'common'
import ListIcon from 'common/icons/List';
import { BoardsList } from './components/BoardsList';

export function Sidebar() {
  const [boards, setBoards] = useState([]);
  const [show, setShow] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCreateBoard(boardName: string) {
    createBoard(boardName);
    setIsSend(true);
  }

  useEffect(() => {
    try {
      getAllBoards().then(data => setBoards(data))
    } catch (error) {
      throw new Error()
    }
  }, [isSend])

  return (
    <div className='sidebar'>
      <h1 className='sidebar-title'>kanban</h1>
      {!boards ? <Spinner /> : <BoardsList data={boards} />}
      <button onClick={handleShow} className='create-btn'><ListIcon /> + Create New Board</button>
      <CreateBoardModal show={show} onShow={handleClose} onCreate={handleCreateBoard} />
    </div>
  )
}
