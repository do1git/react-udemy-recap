import { useHistory } from "react-router-dom";
import NewMeetupForm from "../meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-71d69-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "post",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
