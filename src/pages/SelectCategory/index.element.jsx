import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import { Button } from "../../components/ui";
import Category from "./Category";
import PageTitle from "./PageTitle";
import SelectedCategories from "./SelectedCategories";
import styles from "./styles/index.module.css";

export default function SelectCategoryPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const canProceed = selectedCategories.length > 2;

  const navigate = useNavigate();

  localStorage.setItem(
    "selectedCategories",
    JSON.stringify(selectedCategories)
  );

  const addCategory = (category) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  const removeCategory = (category) => {
    setSelectedCategories(
      selectedCategories.filter((c) => c.id !== category.id)
    );
  };

  const handleProceed = () => {
    if (!canProceed) {
      return;
    }
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.leftGroup}>
          <PageTitle />
          <SelectedCategories
            selectedCategories={selectedCategories}
            removeCategory={removeCategory}
          />
        </div>
        <div className={styles.categories}>
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              addCategory={addCategory}
              removeCategory={removeCategory}
              selectedCategories={selectedCategories}
            />
          ))}
        </div>
      </div>
      <div onClick={handleProceed} className={styles.nextButton}>
        <Button variant="secondary" disabled={!canProceed}>
          Next
        </Button>
      </div>
    </div>
  );
}
