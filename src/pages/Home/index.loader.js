import { defer, redirect } from "react-router-dom";

export const loader = async () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return redirect("/register");
  }

  return defer({
    news: fetchNews(),
    weather: fetchWeather(),
  });
};

// ---- Weather (Open-Meteo API - No Key Required) ----
const fetchWeather = async () => {
  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=40.7&longitude=-74.0&current_weather=true`
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Loading delay for skeleton

  if (!response.ok) {
    throw new Error("Could not fetch weather");
  }

  let data = await response.json();
  return data.current_weather;
};

// ---- News (SpaceFlightNews API - No Key Required) ----
const fetchNews = async () => {
  try {
    let response = await fetch(
      "https://api.spaceflightnewsapi.net/v4/articles/?limit=10"
    );

    if (!response.ok) throw new Error("Could not fetch news");

    let data = await response.json();
    return data.results.map((article) => ({
      title: article.title,
      url: article.url,
      image_url: article.image_url,
      summary: article.summary,
      published_at: article.published_at,
    }));
  } catch (error) {
    console.error("News fetch failed:", error);
    return [];
  }
};
