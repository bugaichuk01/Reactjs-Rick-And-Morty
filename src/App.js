import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import CharactersList from "./components/characters-list";

function App() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(`https://rickandmortyapi.com/api/character?page=1`);
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();
    const [input, setInput] = useState('');

    useEffect(() => {
        const getCharacters = async () => {
            const data = await axios.get(page);
            setCharacters(data.data.results);
            setPrev(data.data.info.prev);
            setNext(data.data.info.next);
        }
        getCharacters();
    }, [page])

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        setPage(`https://rickandmortyapi.com/api/character/?name=${input}`);
    }

    return (
        <div className="App container">
            <div className='d-flex justify-content-center p-2'>
                <button onClick={() => setPage('https://rickandmortyapi.com/api/character/?status=dead')}
                        className='btn btn-danger m-2'>Dead
                </button>
                <button onClick={() => setPage('https://rickandmortyapi.com/api/character/?status=alive')}
                        className='btn btn-success m-2'>Alive
                </button>
                <button onClick={() => setPage('https://rickandmortyapi.com/api/character/?page-1')}
                        className='btn btn-primary m-2'>All
                </button>
            </div>
            <div className='d-flex justify-content-center p-2'>
                <button disabled={!prev} onClick={() => setPage(prev)} className='btn btn-primary m-2'>Previous</button>
                <button disabled={!next} onClick={() => setPage(next)} className='btn btn-primary m-2'>Next</button>
            </div>
            <input placeholder='Type to search a character...' value={input} onChange={handleChange} type="text" className='m-2 form-control'/>
            {
                characters && (
                    <CharactersList characters={characters}/>
                )
            }
        </div>
    );
}

export default App;
