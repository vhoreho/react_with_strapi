import axios from 'axios';

export async function getAllBoards() {
  const response = await axios.get('http://localhost:1337/api/boards');
  return response.data.data;
}

export async function createBoard(title: string) {
  const response = await axios.post('http://localhost:1337/api/boards', {
    title
  })
  console.log(response);
}