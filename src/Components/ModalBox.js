import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalBox = ({ message, showModal, setShowModal }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        animation={false}
      >
        <Modal.Header closeButton>Product Added!</Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => setShowModal(false)}
          >Checked!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBox;
