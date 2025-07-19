import { Image, Text } from "../../components/ui";
import styles from "./styles/Category.module.css";

export default function Category({
  category,
  addCategory,
  removeCategory,
  selectedCategories,
}) {
  let isSelected;

  if (selectedCategories.length > 0) {
    isSelected = selectedCategories.some((c) => c.id === category.id);
  } else {
    isSelected = false;
  }

  const toggleSelect = () => {
    if (isSelected) {
      removeCategory(category);
    } else {
      addCategory(category);
    }
  };

  const selectedStyle = isSelected ? styles.isSelected : "";

  return (
    <div
      className={`${styles.container} ${selectedStyle}`}
      style={{ backgroundColor: category.color }}
      onClick={toggleSelect}
    >
      <Text step={6} weight="500">
        {category.name}
      </Text>
      <div className={styles.image}>
        <Image src={category.image} alt={category.name} />
      </div>
    </div>
  );
}
