import React, { useState } from 'react';

import {
  Button,
  Modal,
  Form
} from 'react-bootstrap';

const Solve: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button className="mt-2" variant="primary" onClick={handleShow}>Diagnose stellen</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diagnose stellen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select size="lg">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Abbrechen</Button>
          <Button variant="primary">Fertig</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Solve;