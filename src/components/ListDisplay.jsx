import React from 'react'
import styles from "../styles/ListDisplay.module.css"

function ListDisplay({list, ordered, heading}) {
  return (
    
    list.map((listItem, index) => <p className={styles.ListItem} key={index}>{Object.values(listItem)}</p>)
    
  )
}

export default ListDisplay