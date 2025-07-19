import Badge from "../../components/ui/Badge";
import { Text } from "../../components/ui/index.js";
import styles from "./styles/UserDetails.module.css";

export default function UserDetails() {
  const user = JSON.parse(localStorage.getItem("user"));
  const selectedCategories = JSON.parse(
    localStorage.getItem("selectedCategories")
  );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Text step={3}>{user.name}</Text>
        <Text step={3}>{user.email}</Text>
        <Text step={8} weight="500">
          {user.username}
        </Text>
      </div>
      <div className={styles.categories}>
        {selectedCategories.map((category) => (
          <div key={category.id} className={styles.category}>
            <Badge size={2} variant="soft">
              {category.name}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
