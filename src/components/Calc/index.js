import styles from "./Calc.module.scss";
import Button from "../Button";

function Cals() {
  return (
    <div className={styles.centering}>
      <div className={styles.calcBody}>
        <div className={styles.blockInput}>
          <input type="number" placeholder="start calculation"></input>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Cals;
