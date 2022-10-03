import { useState, ChangeEvent } from 'react';
import { Modal, Button, FormControl, FormSelect } from 'react-bootstrap';
import { addNewTask } from 'service/tasks';

type Props = {
  show: boolean
  onShow: () => void
}

export function AddNewTask({ show, onShow }: Props) {
  const [taskName, setTaskName] = useState('');
  const [taskDescr, settaskDescr] = useState('');
  const [taskStatus, settaskStatus] = useState('');

  function handleChangeTaskName(e: ChangeEvent<HTMLInputElement>) {
    setTaskName(e.target.value)
  }

  function handleChangeTaskDescr(e: ChangeEvent<HTMLInputElement>) {
    settaskDescr(e.target.value)
  }

  function handleChangeTaskStatus(e: ChangeEvent<HTMLSelectElement>) {
    settaskStatus(e.target.value)
  }


  function handleCreate() {
    addNewTask({ title: taskName, description: taskDescr, status: taskStatus })
    onShow();
  }

  return (
    <>
      <Modal show={show} onHide={onShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type='text' placeholder='Enter task name' className='add-input' onChange={handleChangeTaskName} />
          <FormControl type='text' placeholder='Enter task description' className='add-input' onChange={handleChangeTaskDescr} />
          <FormSelect aria-label="Default select example" onChange={handleChangeTaskStatus}>
            <option>Select status todo</option>
            <option value="todo">todo</option>
            <option value="doing">doing</option>
            <option value="done">done</option>
          </FormSelect>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreate}>
            Create task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}