import { useState } from "react";
import { Text } from "../../components/ui";
import styles from "./styles/NotesCard.module.css";

const getNotes = () => {
  const storedNotes = localStorage.getItem("notes");
  if (!storedNotes) {
    return "";
  }
  return storedNotes;
};

export default function NotesCard() {
  const [notes, setNotes] = useState(getNotes);
  localStorage.setItem("notes", notes);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Text step={7} weight="500" color="black">
          All Notes
        </Text>
      </div>
      <div className={styles.content}>
        <textarea
          placeholder="Start taking notes."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={styles.textarea}
        ></textarea>
      </div>
    </div>
  );
}

