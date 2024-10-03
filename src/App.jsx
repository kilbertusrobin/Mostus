import React, { useState } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/title';
import Choice from './components/difficulty/Choice';
import './App.css';

function App() {
  const answer = 'BLIZZARD';
  const [difficulty, setDifficulty] = useState('medium');
  const [currentWord, setCurrentWord] = useState([answer[0]]);
  const [attempts, setAttempts] = useState([]);
  const [letterStates, setLetterStates] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  const handleCompleteWord = (newWord, newLetterStates) => {
    setAttempts([...attempts, newWord]);
    setLetterStates([...letterStates, newLetterStates]);
    setCurrentRow(currentRow + 1);

    if (currentRow === 0) {
      setCurrentWord([answer[0]]);
    } else {
      setCurrentWord([]);
    }
  };

  return (
    <>
      <div id='bodiv'>
        <Title />
        <div id='gridiv'>
          <Grid
            word={answer}
            difficulty={difficulty}
            attempts={attempts}
            letterStates={letterStates}
            currentWord={currentWord}
            currentRow={currentRow}
          />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5vw', height: '10vw', alignItems: 'center', justifyContent: 'space-around' }}>
            <Choice setDifficulty={setDifficulty} />
          </div>
        </div>
        <div id='keyboardiv'>
          <Keyboard
            answer={answer}
            currentWord={currentWord}
            setWord={setCurrentWord}
            onCompleteWord={handleCompleteWord}
            currentRow={currentRow}
          />
        </div>
      </div>
    </>
  );
}

export default App;
