import React from 'react';
import styles from "./Button.module.scss";

function Button() {
  const items = Array(24).fill(0); // создаем массив из 12 элементов

  return (
    <div className={styles.buttons}>
      {items.map((_, index) => (
        <button key={index} className="button"> {/* отображаем элемент внутри родительского компонента */}
          Элемент #{index + 1} 
        </button>
      ))}
    </div>
  );
}

export default Button;
