import { useState, ChangeEvent } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

type Props = {
  show: boolean
  onShow: () => void
  onCreate: (text: string) => void
}

export function CreateBoardModal({ show, onShow, onCreate }: Props) {
  const [state, setState] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setState(e.target.value)
  }

  function handleCreate() {
    onCreate(state);
    onShow();
  }

  return (
    <>
      <Modal show={show} onHide={onShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create new board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type='text' placeholder='Enter board name' className='add-input' onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreate}>
            Create board
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}