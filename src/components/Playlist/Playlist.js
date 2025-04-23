import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <input defaultValue="New Playlist" />
      <TrackList />
      <button>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
