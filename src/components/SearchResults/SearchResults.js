import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";

function SearchResults({ searchResults }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList tracks={searchResults} />
    </div>
  );
}

export default SearchResults;
