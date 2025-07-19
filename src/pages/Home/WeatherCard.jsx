import { Droplets, Thermometer, Wind } from "lucide-react";
import { Text } from "../../components/ui";
import Divider from "../../components/ui/Divider";
import styles from "./styles/WeatherCard.module.css";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const date = new Date();
  const dateStr = date.toLocaleDateString();
  const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className={styles.container}>
      <TimeBar date={dateStr} time={timeStr} />
      <div className={styles.weather}>
        <DayType weather={weather} />
        <Divider />
        <Temperature weather={weather} />
        <Divider />
        <AirType weather={weather} />
      </div>
    </div>
  );
}

const TimeBar = ({ date, time }) => (
  <div className={styles.now}>
    <Text step={4} weight="500">{date}</Text>
    <Text step={4} weight="500">{time}</Text>
  </div>
);

const DayType = ({ weather }) => (
  <div className={styles.state}>
    <Text step={4}>
      {weather.is_day ? "Daytime" : "Nighttime"}
    </Text>
  </div>
);

const Temperature = ({ weather }) => (
  <div className={styles.temperature}>
    <Text step={6} weight="700">{weather.temperature}°C</Text>
    <div className={styles.pressure}>
      <Thermometer size={24} />
      <div>
        <Text weight="500">{weather.weathercode}</Text>
        <Text step={2}>Condition</Text>
      </div>
    </div>
  </div>
);

const AirType = ({ weather }) => (
  <div className={styles.air}>
    <div className={styles.wind}>
      <Wind />
      <div>
        <Text weight="500">{weather.windspeed} km/h</Text>
        <Text step={2}>Wind</Text>
      </div>
    </div>
    <div className={styles.humidity}>
      <Droplets />
      <div>
        <Text weight="500">--</Text>
        <Text step={2}>Humidity</Text>
      </div>
    </div>
  </div>
);
