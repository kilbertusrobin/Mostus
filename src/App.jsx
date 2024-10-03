import React, { useState } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/title';
import Choice from './components/difficulty/Choice';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [word, setWord] = useState(['C']);
  const [letterStates, setLetterStates] = useState([]);

  return (
    <>
      <div id='bodiv'>
        <Title />
        <div id='gridiv'>
          <Grid
            word='CATAPULTE'
            difficulty={difficulty}
            guessedWord={word}
            letterStates={letterStates}
          />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5vw', height: '10vw', alignItems: 'center', justifyContent: 'space-around' }}>
            <Choice setDifficulty={setDifficulty} />
          </div>
        </div>
        <div id='keyboardiv'>
          <Keyboard
            answer='CATAPULTE'
            setWord={setWord}
            setLetterStates={setLetterStates}
          />
        </div>
      </div>
    </>
  );
}

export default App;
