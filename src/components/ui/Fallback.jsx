import { Text } from "../../components/ui";
import { ERROR_COLOR } from "../../constants";
import styles from "./styles/Fallback.module.css";

export default function Fallback({ error }) {
  return (
    <div className={styles.error}>
      <Text step={4} color={ERROR_COLOR}>
        {error.message} 😬
      </Text>
    </div>
  );
}
