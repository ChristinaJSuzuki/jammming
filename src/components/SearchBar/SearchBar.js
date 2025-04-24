import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  return (
    <div className={styles.SearchBar}>
      <input placeholder="Enter A Song, Album, or Artist" />
      <button onClick={onSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
