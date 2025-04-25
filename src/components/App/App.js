import Spotify from "../../util/Spotify";
import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState("My Awesome Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 4,
      name: "Playlist Track One",
      artist: "Playlist Artist A",
      album: "Playlist Album A",
    },
    {
      id: 5,
      name: "Playlist Track Two",
      artist: "Playlist Artist B",
      album: "Playlist Album B",
    },
  ]);

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const savePlaylist = () => {
    const trackUris = [
      "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
      "spotify:track:1dGr1c8CrMLDpV6mPbImSI",
      "spotify:track:4VqPOruhp5EdPBeR92t6lQ",
    ];

    console.log("Saving playlist:", playlistName);
    console.log("Track URIs:", trackUris);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const handleSearch = async (term) => {
    const results = await Spotify.search(term);
    setSearchResults(results);
  };

  return (
    <div className={styles.App}>
      <h1>Jammming 🎧</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.AppPlaylist}>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
