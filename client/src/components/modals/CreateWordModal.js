import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form, FormControl, Dropdown } from "react-bootstrap";
import { createWord, fetchLists } from "../../http/listsAPI";
import {observer} from 'mobx-react-lite';
import {Context} from "../../index";

const CreateWordModal = observer(({show, onHide}) => {
    const {lists} = useContext(Context);

    const [text, setText] = useState('');
    const [extra, setExtra] = useState('');
    const [listId, setList] = useState(null);
    useEffect(() => {
      fetchLists().then(data => lists.setLists(data))
    }, [])

    const createWord = () => {
      const formData = new FormData()
      formData.append('text', text)
      formData.append('extra', extra)
      formData.append('listId', lists.selectedList.id)
      createWord(formData).then(data => onHide())
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
            Add new word
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <FormControl  value={text} onChange={e => setText(e.target.value)} className="mb-4" placeholder="Enter word"/>
                <FormControl  value={extra} onChange={e => setExtra(e.target.value)} className="mb-4" placeholder="Enter meaning"/>
                <Dropdown>
                    <Dropdown.Toggle>{lists.selectedList.name || "Select List"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {lists.lists.map(list => 
                            <Dropdown.Item onClick={() => lists.setSelectedList(list)} key={list.id}>{list.name}</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
                </Dropdown>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "outline-danger" onClick={onHide}>Close</Button>
          <Button variant = "outline-success" onClick={createWord}>Create</Button>
        </Modal.Footer>
      </Modal>
    )
})

export default CreateWordModal;