import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/Title';
import Choice from './components/difficulty/Choice';
import { fetchWordFromApi } from './components/Api';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [currentWord, setCurrentWord] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [letterStates, setLetterStates] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [answer, setAnswer] = useState('');
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const fetchAnswer = async () => {
      const wordFromApi = await fetchWordFromApi();
      setAnswer(wordFromApi);
      setCurrentWord([wordFromApi[0]]);
    };

    fetchAnswer();
  }, []);
  console.log(answer);
  const maxAttempts = difficulty === 'easy' ? 8 : difficulty === 'medium' ? 6 : 4;

  const handleCompleteWord = (newWord, newLetterStates) => {
    setAttempts([...attempts, newWord]);
    setLetterStates([...letterStates, newLetterStates]);
    setCurrentRow(currentRow + 1);

    if (newWord.join('') === answer) {
      setGameWon(true);
      setTimeout(() => {
        alert("Félicitations, vous avez gagné !");
      }, 300);
    } else if (currentRow + 1 >= maxAttempts) {
      setTimeout(() => {
        alert(`Désolé, vous avez perdu ! Le mot était : ${answer}`);
      }, 300);
    }

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
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5vw', height: '13vw', alignItems: 'center', justifyContent: 'space-around' }}>
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
            disabled={gameWon}
          />
        </div>
      </div>
    </>
  );
}

export default App;
