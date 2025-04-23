import React from "react";
import styles from "./Track.module.css";

function Track() {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInfo}>
        <h3>Song Name</h3>
        <p>Artist | Album</p>
      </div>
      <button className={styles.TrackAction}>+</button>
    </div>
  );
}

export default Track;
