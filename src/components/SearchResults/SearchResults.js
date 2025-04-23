import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";

function SearchResults() {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList />
    </div>
  );
}

export default SearchResults;
