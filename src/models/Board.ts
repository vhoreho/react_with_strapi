export type Task = {

  id: number,
  attributes: {
    title: string
    description: string,
    status: string
  }

}

export type Board = {
  id: number,
  attributes: {
    createdAt: string
    publishedAt: string
    title: string
    updateAt: string
    route: string
    tasks: {
      data: Task[]
    }
  }
}