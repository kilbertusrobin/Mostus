import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/title';
import Choice from './components/difficulty/Choice';
import { fetchWordFromApi } from './components/api'; // Import de la fonction utilitaire
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [currentWord, setCurrentWord] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [letterStates, setLetterStates] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const fetchAnswer = async () => {
      const wordFromApi = await fetchWordFromApi(); // Appel de la fonction
      setAnswer(wordFromApi);
      setCurrentWord([wordFromApi[0]]); // Initialise currentWord avec la première lettre
    };

    fetchAnswer();
  }, []);

  const handleCompleteWord = (newWord, newLetterStates) => {
    setAttempts([...attempts, newWord]);
    setLetterStates([...letterStates, newLetterStates]);
    setCurrentRow(currentRow + 1);

    if (currentRow === 0) {
      setCurrentWord([answer[0]]); // Réinitialise avec la première lettre
    } else {
      setCurrentWord([]);
    }
  };
  console.log(answer);

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
