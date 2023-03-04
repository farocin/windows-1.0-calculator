import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.contexMenu}>...</div>
      <div className={styles.backText}>
        <p>Calculator</p>
      </div>
      <div className={styles.close}>...</div>
    </header>
  );
}

export default Header;
