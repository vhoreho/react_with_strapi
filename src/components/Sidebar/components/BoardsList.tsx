import { Row } from 'react-bootstrap';
import { Board } from 'models/Board';
import { Navbar } from './Navbar';

type Props = {
  data: Board[]
}

export function BoardsList({ data }: Props) {
  return (
    <>
      <Row>
        <h1 className='sidebar-boards-title'>All boards ({data.length})</h1>
      </Row>
      <Navbar list={data} />
    </>
  )
} 