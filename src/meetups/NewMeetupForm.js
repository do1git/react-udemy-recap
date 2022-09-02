import { useRef } from "react";
import Card from "../components/ui/Card";
import styles from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addrInputRef = useRef();
  const descInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddr = addrInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddr,
      description: enteredDesc,
    };
    props.onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form styles={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meerup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meerup Image</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="addr">Address</label>
          <input type="text" required id="addr" ref={addrInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="desc">Description</label>
          <textarea required id="desc" rows="5" ref={descInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}
