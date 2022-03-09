import React, { useState } from "react";

const SearchBar = ({ setPage, setSearchQuery }) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return alert("Search cannot be empty");
    setSearchQuery(userInput);
    setPage(0);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
        id="search"
        placeholder="Type here"
        name="s"
      />
      <button id="submit" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
