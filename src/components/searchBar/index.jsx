import React, { useRef } from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const inputValueRef = useRef();

  const handlerSearchInput = () => {
    console.log(inputValueRef.current.value);
  };

  return (
    <div className="search-bar-header">
      <input
        type="text"
        ref={inputValueRef}
        placeholder="Wyszukaj produkt..."
        onChange={handlerSearchInput}
      />
      <FontAwesomeIcon icon={faSearch} size="1x" className="search-button" />
    </div>
  );
};

export default SearchBar;
