import React, { useState } from "react";
import "./ModalPop.css";
import { Button, Modal } from "react-bootstrap";

function ModalPop(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.action();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Hey!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I've got your message. I will get back to you ASAP.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPop;
