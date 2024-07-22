import React, { useState } from "react";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import styles from "./SearchBar.module.css";
import { BUTTON_TEXT, INPUT_NAME, PLACEHOLDER_TEXT } from "./searchBarStrings";
import { BUTTON_TYPE } from "../../../../common/Button/buttonStrings";
import { INPUT_TYPE } from "../../../../common/Input/inputStrings";

function SearchBar({ searchMessage }) {
  const [search, setSearch] = useState("");

  const searchClicked = () => {
    searchMessage(search);
  };

  const searchText = (e) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      searchMessage("");
    }
  };

  return (
    <div className={styles.searchBar}>
      <Input
        name={INPUT_NAME.SEARCH_BAR}
        value={search}
        type={INPUT_TYPE.TEXT}
        onChange={searchText}
        placeholderText={PLACEHOLDER_TEXT.SEARCH_TEXT}
      />
      <Button
        buttonText={BUTTON_TEXT.SEARCH_TEXT}
        type={BUTTON_TYPE.BUTTON}
        onClick={searchClicked}
      />
    </div>
  );
}

export default SearchBar;
