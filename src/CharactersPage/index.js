import React, {useMemo, useState} from "react";
import {getCharacters} from "../services/characters";


const CharactersPage = () => {
    const [query, setQuery] = useState('');
    const filteredCharacters = useMemo(() => getCharacters(query), [query]);

    return (
        <div className={'characters-page'}>
            <input className={'search-input'}
                   value={query}
                   onChange={(event) => {
                       const newValue = event.target.value;
                       setQuery(newValue);
                   }}
            />
            <br/>

            Поиск будет по строке: {query}

            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Статус</th>
                </tr>
                </thead>
                <tbody>
                {filteredCharacters.map((character) => (
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.status}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CharactersPage;