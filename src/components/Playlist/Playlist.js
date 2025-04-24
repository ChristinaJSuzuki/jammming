import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";

function Playlist({ playlistName, playlistTracks, onRemove }) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={playlistName} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
