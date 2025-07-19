import { Icon } from "@iconify/react";
import { Button, Text } from "../../components/ui";
import { NEUTRAL_COLOR } from "../../constants";
import styles from "./styles/TimerSetter.module.css";

export default function TimerSetter({
  isCounting,
  isRinging,
  setIsCounting,
  dispatch,
  time,
}) {
  const toggleCountDown = () => {
    if (isCounting) {
      dispatch({ type: "reset" });
    } else {
      setIsCounting(true);
    }
  };

  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <Headings />
          <Incrementers
            isCounting={isCounting}
            isRinging={isRinging}
            dispatch={dispatch}
          />
          <Numbers time={time} />
          <Decrementers
            isCounting={isCounting}
            isRinging={isRinging}
            dispatch={dispatch}
          />
        </tbody>
      </table>
      <Button disabled={isRinging} onClick={toggleCountDown} variant="error">
        {isCounting ? "Stop" : "Start"}
      </Button>
    </div>
  );
}

const Headings = () => {
  return (
    <tr>
      <th>
        <Text step={4} color={NEUTRAL_COLOR} weight="500">
          Hours
        </Text>
      </th>
      <th></th>
      <th>
        <Text step={4} color={NEUTRAL_COLOR} weight="500">
          Minutes
        </Text>
      </th>
      <th></th>
      <th>
        <Text step={4} color={NEUTRAL_COLOR} weight="500">
          Seconds
        </Text>
      </th>
    </tr>
  );
};

const Incrementers = ({ isCounting, isRinging, dispatch }) => {
  return (
    <tr>
      <td>
        <button
          disabled={isCounting || isRinging}
          className={styles.timerButton}
          onClick={() => dispatch({ type: "incrementHours" })}
        >
          <Icon
            icon="octicon:triangle-down-24"
            style={{
              fontSize: "2.5rem",
            }}
            rotate={2}
            color={NEUTRAL_COLOR}
          />
        </button>
      </td>
      <td></td>
      <td>
        <button
          disabled={isCounting || isRinging}
          className={styles.timerButton}
          onClick={() => dispatch({ type: "incrementMinutes" })}
        >
          <Icon
            icon="octicon:triangle-down-24"
            style={{
              fontSize: "2.5rem",
            }}
            rotate={2}
            color={NEUTRAL_COLOR}
          />
        </button>
      </td>
      <td></td>
      <td>
        <button
          disabled={isCounting || isRinging}
          className={styles.timerButton}
          onClick={() => dispatch({ type: "incrementSeconds" })}
        >
          <Icon
            icon="octicon:triangle-down-24"
            style={{
              fontSize: "2.5rem",
            }}
            rotate={2}
            color={NEUTRAL_COLOR}
          />
        </button>
      </td>
    </tr>
  );
};

const Numbers = ({ time }) => {
  return (
    <tr>
      <td>
        <Text step={7}>{time.hours}</Text>
      </td>
      <td>
        <Text step={7} weight="500">
          :
        </Text>
      </td>
      <td>
        <Text step={7}>{time.minutes}</Text>
      </td>
      <td>
        <Text step={7} weight="500">
          :
        </Text>
      </td>
      <td>
        <Text step={7}>{time.seconds}</Text>
      </td>
    </tr>
  );
};

const Decrementers = ({ isCounting, isRinging, dispatch }) => {
  return (
    <tr>
      <td>
        <button
          disabled={isCounting || isRinging}
          className={styles.timerButton}
          onClick={() => dispatch({ type: "decrementHours" })}
        >
          <Icon
            icon="octicon:triangle-down-24"
            style={{
              fontSize: "2.5rem",
            }}
            color={NEUTRAL_COLOR}
          />
        </button>
      </td>
      <td></td>
      <td>
        <button
          disabled={isCounting || isRinging}
          className={styles.timerButton}
          onClick={() => dispatch({ type: "decrementMinutes" })}
        >
          <Icon
            icon="octicon:triangle-down-24"
            style={{
              fontSize: "2.5rem",
            }}
            color={NEUTRAL_COLOR}
          />
        </button>
      </td>
      <td></td>
      <td>
        {" "}
        <button
          disabled={isCounting || isRinging}
          className={styles.timerButton}
          onClick={() => dispatch({ type: "decrementSeconds" })}
        >
          <Icon
            icon="octicon:triangle-down-24"
            style={{
              fontSize: "2.5rem",
            }}
            color={NEUTRAL_COLOR}
          />
        </button>
      </td>
    </tr>
  );
};
