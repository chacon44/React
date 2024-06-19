import { useState } from "react";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

import styles from "./SearchBar.module.css";

function SearchBar({ searchMessage }) {
  const [search, setSearch] = useState("");

  const searchClicked = () => {
    searchMessage(search);
  };

  const searchText = (e) => {
    setSearch(e.target.value);
    !e.target.value && searchMessage("");
  };

  return (
    <div className={styles.searchBar}>
      <Input
        name="searchBar"
        value={search}
        onChange={searchText}
        placeholderText="Enter course name..."
      />
      <Button onClick={searchClicked} buttonText={"Search"} />
    </div>
  );
}

export default SearchBar;
