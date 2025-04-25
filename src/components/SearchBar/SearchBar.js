import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = () => {
    if (term.trim()) {
      onSearch(term);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={handleTermChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
