import styles from "./styles/Text.module.css";

export default function Text({
  children,
  step = 3,
  weight = "400",
  color = "inherit",
  inLineStyles,
}) {
  let stepStyle;

  switch (step) {
    case 1:
      stepStyle = styles.stepOne;
      break;
    case 2:
      stepStyle = styles.stepTwo;
      break;
    case 3:
      stepStyle = styles.stepThree;
      break;
    case 4:
      stepStyle = styles.stepFour;
      break;
    case 5:
      stepStyle = styles.stepFive;
      break;
    case 6:
      stepStyle = styles.stepSix;
      break;
    case 7:
      stepStyle = styles.stepSeven;
      break;
    case 8:
      stepStyle = styles.stepEight;
      break;
    case 9:
      stepStyle = styles.stepNine;
      break;
  }

  return (
    <p
      style={{
        fontWeight: weight,
        color: color,
        ...inLineStyles,
      }}
      className={stepStyle}
    >
      {children}
    </p>
  );
}
