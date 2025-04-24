import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [SearchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Track One",
      artist: "Artist A",
      album: "Album A",
    },
    {
      id: 2,
      name: "Track Two",
      artist: "Artist B",
      album: "Album B",
    },
    {
      id: 3,
      name: "Track Three",
      artist: "Artist C",
      album: "Album C",
    },
  ]);

  return (
    <div className={styles.App}>
      <SearchBar />
      <div className={styles.AppPlaylist}>
        <SearchResults SearchResults={SearchResults} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
