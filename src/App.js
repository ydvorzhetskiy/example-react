import React, {useState} from 'react';
import Header from "./Header";
import './App.css';
import CharactersPage from "./CharactersPage";
import Counter from "./Counter";

const App = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div className={'app'}>
            <Header/>

            <button onClick={() => setVisible(!visible)}>Toggle таблицу</button>
            <br/>
            {visible && <CharactersPage/>}

            <br/>
            <Counter/>
            <br/>
            <Counter initialValue={0}/>
            <br/>
            <Counter initialValue={1}/>
            <br/>
            <Counter initialValue={2}/>
            <br/>
            <Counter initialValue={-100}/>

        </div>
    );
}

export default App;
