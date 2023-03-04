import React from "react";
import styles from "../styles/ListDisplay.module.css";
/*
This component is to display the elements in a list (either ordered or unordered).
In the app, the list is a list of JSON objects so the Object class is used to extract its value.
*/

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
