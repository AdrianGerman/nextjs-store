import styles from "./Footer.module.sass";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Gikariu&apos;s © {new Date().getFullYear()}</p>
    </footer>
  );
};
