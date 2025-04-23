import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function TrackList() {
  return (
    <div className={styles.TrackList}>
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default TrackList;
