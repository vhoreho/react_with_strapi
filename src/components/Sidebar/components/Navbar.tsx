import { Link } from 'react-router-dom';
import { Board } from 'models/Board';
import ListIcon from 'common/icons/List';

type Props = {
  list: Board[]
}

export function Navbar({ list }: Props) {
  return (
    <nav>
      <ul style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
        {list?.map(board => <Link key={board.id} to={board.attributes.route} className='sidebar-link'><ListIcon />{board.attributes.title}</Link>)}
      </ul>
    </nav>
  )
} 