import React from "react";

const SearchBar = ({ query, onSubmit, onChange }) => {
  return (
    <div>
      <form className="form-search" onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          className="form-search__input"
          required
          onChange={onChange}
        />
        <input type="submit" value="Search" />
        {/* <button type="submit" className="form-search__button">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default SearchBar;

// 	<form onSubmit={getGifs}>
//   <input onChange={handleInput} />
//   <button type="submit">Search</button>
// </form>
