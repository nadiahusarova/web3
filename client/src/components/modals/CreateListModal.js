import React, {useState} from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import { createList } from "../../http/listsAPI";

const CreateListModal = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addList = () =>{
        createList({name: value}).then(data => setValue(''))
        onHide();
    }

    return (
        <Modal
        show={show}
        onHide = {onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new list
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <FormControl value={value} onChange={e => setValue(e.target.value)} placeholder="Enter name of list"/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "outline-danger" onClick={onHide}>Close</Button>
          <Button variant = "outline-success" onClick={addList}>Create</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateListModal;