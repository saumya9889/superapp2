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

const fetchWeather = async () => {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?q=new-york&key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );

  //just to show loading skeleton
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  if (!response.ok) {
    throw new Error("Could not fetch weather");
  }

  let data = await response.json();
  return data;
};

const fetchNews = async () => {
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=cat&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`
  );

  //just to show loading skeleton
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  if (response.status == 429) {
    throw new Error("Too many requests");
  }

  if (!response.ok) {
    throw new Error("Could not fetch news");
  }

  let data = await response.json();
  return data.articles;
};
