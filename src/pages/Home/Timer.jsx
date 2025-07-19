import PropTypes from "prop-types";
import { Circle } from "rc-progress";
import bellGif from "../../assets/bell-gif.gif";
import { Image, Text } from "../../components/ui";
import styles from "./styles/Timer.module.css";

export default function Timer({
  count,
  countRef,
  time,
  isCounting,
  isRinging,
}) {
  const percent =
    count == 0
      ? 0
      : 100 - ((countRef.current - count) / countRef.current) * 100;

  return (
    <div className={styles.timer}>
      <Circle
        percent={isRinging ? 0 : isCounting ? percent : 100}
        strokeWidth={4}
        strokeColor="#FF6A6A"
        trailColor="transparent"
      />
      <div className={styles.time}>
        {isRinging ? (
          <Image src={bellGif} />
        ) : (
          <Text step={7} weight="500">
            {time.hours}:{time.minutes}:{time.seconds}
          </Text>
        )}
      </div>
    </div>
  );
}

Timer.propTypes = {
  count: PropTypes.number.isRequired,
  countRef: PropTypes.object.isRequired,
  time: PropTypes.object.isRequired,
  isCounting: PropTypes.bool.isRequired,
  isRinging: PropTypes.bool.isRequired,
};
