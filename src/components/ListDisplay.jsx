import React from "react";
import styles from "../styles/ListDisplay.module.css";

function ListDisplay({ list, ordered, heading }) {
  return (
    <div>
      <h4 className={styles.h4}>{heading}</h4>

      {ordered ? (
        <ol>
          {list.map((listItem, index) => (
            <li className={styles.ListItem} key={index}>
              {Object.values(listItem)}
            </li>
          ))}
        </ol>
      ) : (
        <ul>{list.map((listItem, index) => (
          <li className={styles.ListItem} key={index}>
            {Object.values(listItem)}
          </li>
        ))}</ul>
      )}
    </div>
  );
}

export default ListDisplay;
