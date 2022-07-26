import styles from "./Avatar.module.css";

export function Avatar({hasBorder = true, src}) {
    // const hasBorder = props.hasBorder !== false;

  return (
    <img
      className={hasBorder ? styles.avatarWhithBorder : styles.avatar}
      src={src}
    />
  );
}
