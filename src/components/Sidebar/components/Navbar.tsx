
import { Link } from 'react-router-dom';
import { Board } from '..';

type Props = {
  list: Board[]
}

export function Navbar({ list }: Props) {
  return (
    <nav>
      <ul style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
        {list?.map(board => <Link key={board.id} to={board.attributes.title}>{board.attributes.title}</Link>)}
      </ul>
    </nav>
  )
} 