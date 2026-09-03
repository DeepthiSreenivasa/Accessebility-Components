import { useRef, useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalDemo = () => {
  const [isOpen, setOpen] = useState(true);
  const focusButton = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
  };

  const deleteClicked = () => {
    console.log("Delete Clicked");
  };

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Button ref={focusButton} onClick={toggleModal}>
        {isOpen ? "Hide" : "Show"}
      </Button>
      <Modal
        title="This is modal Component"
        isOpen={isOpen}
        close={close}
        openerRef={focusButton}
      >
        <Button onClick={deleteClicked}>Delete</Button>
        <Button onClick={close}>Cancel</Button>
      </Modal>
    </>
  );
};

export default ModalDemo;
