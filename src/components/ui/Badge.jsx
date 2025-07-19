import styles from "./styles/Badge.module.css";

export default function Badge({
  children = "badge",
  variant = "primary",
  icon,
  inLineStyles,
  size = 2,
}) {
  let sizeStyle;

  switch (size) {
    case 1:
      sizeStyle = styles.sizeOne;
      break;
    case 2:
      sizeStyle = styles.sizeTwo;
      break;
  }

  const badgeVariant = styles[variant];
  const badgeWithIcon = icon ? styles.withIcon : "";

  return (
    <span
      className={`${styles.badge} ${sizeStyle} ${badgeVariant} ${badgeWithIcon}`}
      style={{ ...inLineStyles }}
    >
      {children}
      {icon && <div className={styles.icon}>{icon}</div>}
    </span>
  );
}
