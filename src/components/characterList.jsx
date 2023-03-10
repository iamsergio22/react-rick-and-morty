import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Character from './character';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>Page:{props.page}</p>
            <button className='btn btn-primary btn-sm'
                onClick={() => props.setPage(props.page + 1)}>
                Page {props.page+1}
            </button>
        </header>
    )
}

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] =useState(true);
    const [page, setPage] =useState(1);

    useEffect(() => {
        async function FetchData() {
            const response = await fetch('https://rickandmortyapi.com/api/character?page='+page);
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results);
        }

        FetchData()

    }, [page]);
    return (
        <div className='container'>
            <NavPage page={page} setPage={setPage} />
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div className='row'>
                {
                    characters.map(character => {
                        return (
                            <div className='col-md-4' key={character.id}>
                                <Character character={character} />
                            </div>
                        )
                    })
                }
            </div>
            )}            
        </div>
    )
}

export default CharacterList
