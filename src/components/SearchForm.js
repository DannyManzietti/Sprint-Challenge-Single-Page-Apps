import React, { useState, useEffect } from "react";

export default function SearchForm({ characters, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
    searchTerm === ""
      ? setSearchResults(characters)
      : setSearchResults(results);
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <input
          name="search"
          type="text"
          placeholder="Search for Character"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
