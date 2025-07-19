import { Droplets, Thermometer, Wind } from "lucide-react";
import { Text, Image } from "../../components/ui";
import Divider from "../../components/ui/Divider";
import styles from "./styles/WeatherCard.module.css";

export default function WeatherCard({ weather }) {
  const timeArr = weather.location.localtime.split(" ");

  return (
    <div className={styles.container}>
      <TimeBar timeArr={timeArr} />
      <div className={styles.weather}>
        <DayType weather={weather} />
        <Divider />
        <Temperature weather={weather} />
        <Divider />
        <AirtType weather={weather} />
      </div>
    </div>
  );
}

const TimeBar = ({ timeArr }) => {
  return (
    <div className={styles.now}>
      <Text step={4} weight="500">
        {timeArr[0]}
      </Text>
      <Text step={4} weight="500">
        {timeArr[1]}
      </Text>
    </div>
  );
};

const DayType = ({ weather }) => {
  return (
    <div className={styles.state}>
      <div className={styles.stateImage}>
        <Image src={weather.current.condition.icon} alt="" />
      </div>
      <Text step={4}>{weather.current.condition.text}</Text>
    </div>
  );
};

const Temperature = ({ weather }) => {
  return (
    <div className={styles.temperature}>
      <Text step={6} weight="700">
        {weather.current.temp_c}°C
      </Text>
      <div className={styles.pressure}>
        <Thermometer size={24} />
        <div>
          <Text weight="500">{weather.current.pressure_mb} mbar</Text>
          <Text step={2}>Pressure</Text>
        </div>
      </div>
    </div>
  );
};

const AirtType = ({ weather }) => {
  return (
    <div className={styles.air}>
      <div className={styles.wind}>
        <Wind />
        <div>
          <Text weight="500">{weather.current.wind_kph} km/h</Text>
          <Text step={2}>Wind</Text>
        </div>
      </div>
      <div className={styles.humidity}>
        <Droplets />
        <div>
          <Text weight="500">{weather.current.humidity}%</Text>
          <Text step={2}>Humidity</Text>
        </div>
      </div>
    </div>
  );
};
