import { useEffect, useReducer, useRef, useState } from "react";
import useSound from "use-sound";
import bellSound from "../../assets/bellSoundCut.mp3";
import { formatTime } from "../../utils/formatTime";
import Timer from "./Timer";
import TimerSetter from "./TimerSetter";
import styles from "./styles/TimerCard.module.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "incrementHours":
      return state + 3600;
    case "decrementHours":
      if (state < 3600) {
        return state;
      }
      return state - 3600;
    case "incrementMinutes":
      return state + 60;
    case "decrementMinutes":
      if (state < 60) {
        return state;
      }
      return state - 60;
    case "incrementSeconds":
      return state + 1;
    case "decrementSeconds":
      if (state === 0) {
        return state;
      }
      return state - 1;
    case "reset":
      return 0;
    default:
  }
};

export default function TimerCard() {
  const [count, dispatch] = useReducer(countReducer, 0);
  const [isCounting, setIsCounting] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [play, { stop }] = useSound(bellSound);

  const formatedTime = formatTime(count);

  //Need to store count value before countdown begins.
  const countRef = useRef();

  if (!isCounting) {
    countRef.current = count;
  }

  // decrease count every second if isCounting.
  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(
        () => dispatch({ type: "decrementSeconds" }),
        1000
      );
    }

    return () => clearInterval(interval);
  }, [isCounting, dispatch]);

  //stop countdown and play sound after time ends.
  useEffect(() => {
    let timer;

    if (isCounting && count == 0) {
      setIsCounting(false);
      setIsRinging(true);
      play();
    }
    if (isRinging) {
      timer = setTimeout(() => {
        stop();
        setIsRinging(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isRinging, isCounting, count, play, stop]);

  return (
    <div className={styles.container}>
      <Timer
        isRinging={isRinging}
        isCounting={isCounting}
        time={formatedTime}
        count={count}
        countRef={countRef}
      />
      <TimerSetter
        isCounting={isCounting}
        isRinging={isRinging}
        setIsCounting={setIsCounting}
        dispatch={dispatch}
        time={formatedTime}
      />
    </div>
  );
}

