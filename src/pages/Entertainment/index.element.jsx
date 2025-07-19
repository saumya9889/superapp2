import { Text } from "../../components/ui";
import Contents from "./Contents";
import Navigation from "./Navigation";
import styles from "./styles/index.module.css";

export default function EntertainmentPage() {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <Text step={5} weight="500">
          Entertainment according to your choice
        </Text>
        <Contents />
      </main>
    </div>
  );
}
