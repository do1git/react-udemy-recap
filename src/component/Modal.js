export default function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you suurre?</p>
      <button onClick={cancelHandler} className="btn btn--alt">
        Cancel
      </button>
      <button onClick={confirmHandler} className="btn">
        Confirm
      </button>
    </div>
  );
}
