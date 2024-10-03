import React, { useState, useEffect } from 'react';

const Keyboard = (props) => {
  const { answer, currentWord, setWord, onCompleteWord } = props;
  const answerLength = answer.length;
  const letters = [
    'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N'
  ];

  const [word, setWordState] = useState(currentWord);

  useEffect(() => {
    setWordState(currentWord);
  }, [currentWord]);

  const handleButtonClick = (letter) => {
    if (word.length < answerLength) {
      const newWord = [...word, letter];
      setWordState(newWord);
      setWord(newWord);

      if (newWord.length === answerLength) {
        const newLetterStates = newWord.map((char, index) => {
          if (char === answer[index]) {
            return 'correct';
          } else if (answer.includes(char)) {
            return 'present';
          } else {
            return 'incorrect';
          }
        });

        onCompleteWord(newWord, newLetterStates); // Passe le mot complété et ses états à App.js
      }
    }
  };

  const handleDeleteClick = () => {
    if (word.length > 1) {
      const newWord = word.slice(0, -1);
      setWordState(newWord);
      setWord(newWord);
    }
  };

  return (
    <div>
      {letters.map((letter, index) => (
        <React.Fragment key={index}>
          <button onClick={() => handleButtonClick(letter)}>{letter}</button>
          {(letter === 'P' || letter === 'M') && <br />}
        </React.Fragment>
      ))}
      <button onClick={handleDeleteClick}>Effacer</button>
      <button>Entrer</button>
    </div>
  );
};

export default Keyboard;
