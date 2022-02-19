import React, {useEffect, useState} from 'react';
import axios from "axios";

function CharacterItem({character}) {
    const [firstEpisode, setFirstEpisode] = useState();
    const [lastEpisode, setLastEpisodeEpisode] = useState();

    useEffect(() => {
        const getEpisodes = async () => {
            const first = await axios.get(character.episode[0]);
            const last = await axios.get(character.episode[character.episode.length - 1]);

            setFirstEpisode(first.data);
            setLastEpisodeEpisode(last.data);

        }
        getEpisodes();
    }, [character.episode])

    return (
        <span>
            {firstEpisode && lastEpisode && (
                <li className='list__item'>
                    <img className='list__item-img' src={character.image} alt={character.name}/>
                    <div className='list__item-top'>
                        <p className='list__item-name'>{character.name}</p>
                        <p className='list__item-desc'>{character.status} - {character.species}</p>
                        <p className='list__item-first'>First seen in: {firstEpisode.name}</p>
                        <p className='list__item-last'>Last known location: {lastEpisode.name}</p>
                    </div>
                </li>
            )}
        </span>
    );
}

export default CharacterItem;