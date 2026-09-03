import { useEffect, useId, useRef } from "react";
import Button from "./Button";

interface ModalProps {
  title: string;
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  openerRef: any;
}

const Modal = ({ title, isOpen, close, openerRef, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    console.log("Into Use Effect");
    if (isOpen == true) {
      document.addEventListener("keydown", closeModal);
      modalRef.current?.focus();
    }

    return () => document.removeEventListener("keydown", closeModal);
  }, [isOpen, close]);

  useEffect(() => {
    openerRef.current.focus();
  }, [isOpen, close]);

  const closeModal = (event: KeyboardEvent) => {
    console.log("Into closeModal::", event.key);
    if (event.key === "Escape") {
      console.log("Into close Method");
      close();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-labelledby={`modal-title-${id}`}
          aria-modal="true"
          style={{ backgroundColor: "green", width: "500px", height: "200px" }}
        >
          <h2 id={`modal-title-${id}`}>{title}</h2>
          <Button onClick={close}>Close</Button>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
