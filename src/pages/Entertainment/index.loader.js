import { redirect } from "react-router-dom";

export const loader = () => {
  const selectedCategories = JSON.parse(
    localStorage.getItem("selectedCategories")
  );

  if (!selectedCategories || !selectedCategories.length) {
    return redirect("/select-category");
  }

  return selectedCategories;
};
