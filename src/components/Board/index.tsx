import { Header, Spinner } from 'common';
import { Board as BoardData } from 'models/Board';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { getBoardById } from 'service/boards';
import { TodoList } from './components/TodoList/TodoList';

export function Board() {
  const { id } = useParams();

  const { data } = useSWR<BoardData>(id, getBoardById);

  if (!data) {
    return <Spinner />
  }

  return (
    <>
      <Header title={data.attributes.title} />
      <TodoList todos={data.attributes.tasks.data} />
    </>
  )
}
