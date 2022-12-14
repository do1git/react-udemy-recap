import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          address={meetup.description}
        />
      ))}
    </ul>
  );
}
