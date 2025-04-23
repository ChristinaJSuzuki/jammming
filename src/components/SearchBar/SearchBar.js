import React from "react";
import "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={StyleSheet.SearchBar}>
      <input placeholder="Enter A Song, Album, or Artist" />
      <button>SEARCH</button>
    </div>
  );
}

export default SearchBar;
