import React from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist";

function App() {
  return (
    <div className={styles.App}>
      <SearchBar />
      <div className={styles.AppPlaylist}>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
