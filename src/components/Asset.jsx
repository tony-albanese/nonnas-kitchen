import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {message && <p className="mt-4">{message}</p>}
      {src && <img src={src} alt={message} />}
      
    </div>
  );
};

export default Asset;