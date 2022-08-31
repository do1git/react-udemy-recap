import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({ text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    console.log(text);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    console.log("try to close");
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
