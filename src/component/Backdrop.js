function Backdrop(props) {
  console.log("props");
  console.log(props.onCancel);
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
