import React from "react";
import styled from "styled-components";

const Character = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

export default function CharacterCard({ character }) {
  console.log(character);
  return (
    <Character>
      <img src={character.image} alt="Rick and Morty" />
      <h2>{character.name}</h2>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
    </Character>
  );
}
