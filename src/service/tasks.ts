import axios from "axios";

type BodyTask = {
  title: string,
  description: string,
  status: string
}

export async function getAllTasks(id: string) {
  const response = await axios.get(`http://localhost:1337/api/boards/${id}/?populate=*`);
  return response.data.data;
}

export async function addNewTask(body: BodyTask) {
  const response = await axios.post('http://localhost:1337/api/tasks1', {
    data: {
      body
    }
  })

  return response
}