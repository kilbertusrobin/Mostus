import React, { useState } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/title';
import Choice from './components/difficulty/Choice';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [currentWord, setCurrentWord] = useState(['C']);
  const [attempts, setAttempts] = useState([]); // Stocke les essais précédents
  const [letterStates, setLetterStates] = useState([]); // Stocke les états des lettres pour chaque ligne
  const [currentRow, setCurrentRow] = useState(0); // Index de la ligne actuelle

  const handleCompleteWord = (newWord, newLetterStates) => {
    setAttempts([...attempts, newWord]); // Ajoute le mot actuel aux tentatives
    setLetterStates([...letterStates, newLetterStates]); // Ajoute les états des lettres
    setCurrentRow(currentRow + 1); // Passe à la ligne suivante
    setCurrentWord(['C']); // Réinitialise le mot avec la première lettre
  };

  return (
    <>
      <div id='bodiv'>
        <Title />
        <div id='gridiv'>
          <Grid
            word='CATAPULTE'
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
            answer='CATAPULTE'
            currentWord={currentWord}
            setWord={setCurrentWord}
            onCompleteWord={handleCompleteWord} // Fonction appelée quand un mot est complété
          />
        </div>
      </div>
    </>
  );
}

export default App;
