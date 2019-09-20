import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PageMenu from "./Page";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .homeLink {
    text-decoration: none;
    background: #53b9b7;
    color: black;
    padding: 10px;
    border-radius: 5px;
    margin: 10px auto 30px;
    width: 200px;
    text-align: center;
  }
`;

const CharacterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(respo => setCharacters(respo.data.results))
      .catch(err => console.log("Failed axios", err));
  }, []);
  const handlePageChange = number => {
    setPage(number);
  };

  return (
    <CharacterPageContainer>
      <SearchForm characters={characters} setSearchResults={setSearchResults} />
      <CharacterContainer>
        {(searchResults.length === 0 ? characters : searchResults).map(
          character => (
            <CharacterCard key={character.id} character={character} />
          )
        )}
      </CharacterContainer>
      <div>
        <PageMenu pages={2} handlePageChange={handlePageChange} />
      </div>
    </CharacterPageContainer>
  );
}
