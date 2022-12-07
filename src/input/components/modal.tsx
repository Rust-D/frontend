import React from "react";
import Modal from "react-modal";


type ModalProps = {
  IsOpen : boolean
  setIsOpen : Function
}

export default function OutputModal(props : ModalProps) {
  // const [IsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      {/* <button onClick={() => props.setIsOpen(true)}>Open Modal</button> */}
      <Modal isOpen={props.IsOpen}>
        <button onClick={() => props.setIsOpen(false)}>Close Modal</button>
        <h1>入力漏れがあります！</h1>
      </Modal>
    </div>
  );
}