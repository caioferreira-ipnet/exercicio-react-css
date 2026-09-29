import React from "react";
import styles from "../styles/Car.module.css";
const Car = ({ id, name, brand }) => {
  return (
    <ul className={styles.myList}>
      <li>
        {name} - {brand}
      </li>
    </ul>
  );
};

export default Car;
