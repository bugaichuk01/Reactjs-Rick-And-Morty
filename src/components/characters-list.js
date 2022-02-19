import React from 'react';
import CharacterItem from "./character-item";

function CharactersList({characters}) {
    return (
        <ul className='list__container'>
            {characters.map((character) => (
                    <CharacterItem character={character} key={character.id} />
                ))}
        </ul>
    );
}

export default CharactersList;