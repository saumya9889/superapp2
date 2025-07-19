import {Fallback} from "../../components/ui";
import styles from "./styles/CategoryFallback.module.css";

export default function CategoryFallback({ error }) {
  return (
    <div className={styles.container}>
      <Fallback error={error} />
    </div>
  );
}
