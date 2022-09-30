import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { createBoard, getAllBoards } from 'service/boards';
import { Spinner } from 'common/Spinner';
import './Sidebar.scss';
import { Navbar } from './components/Navbar';

export type Board = {
  id: number,
  attributes: {
    createdAt: string
    publishedAt: string
    title: string
    updateAt: string
  }
}


export function Sidebar() {
  const [state, setState] = useState<Board[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllBoards().then(data => setState(data));
    setIsLoading(false);
  }, [])

  function handleCreateBoard() {
    createBoard('Navbar')
  }

  return (
    <div className='sidebar'>
      <h1>kanban</h1>

      <Row style={{ marginBlock: '20px' }}>
        <Col>
          <h3 className='sidebar__title'>All boards ({state?.length})</h3>
        </Col>
      </Row>
      {isLoading ? <Spinner /> : <Navbar list={state!} />}

      <button onClick={handleCreateBoard}>Add new board</button>
    </div>
  )
}
